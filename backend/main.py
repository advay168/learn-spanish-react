from typing import Any, Sequence
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine, Base
import schemas
import db_transactions

import conjugate

from sqlalchemy.orm import Session

import config

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    Base.metadata.create_all(bind=engine)
except Exception:
    pass


def get_db() -> Any:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/learn", response_model=list[schemas.Data])
async def learn(session: Session = Depends(get_db)) -> Sequence[schemas.Data]:
    return db_transactions.get_words(session)


@app.delete("/remove/{id}")
async def remove(id: int, session: Session = Depends(get_db)) -> bool:
    db_transactions.remove_word(session, id)
    return True


@app.post("/add")
async def add(data: schemas.Data, session: Session = Depends(get_db)) -> bool:
    db_transactions.add_word(session, data)
    return True


@app.get("/test", response_model=schemas.TestQuestion)
async def test(session: Session = Depends(get_db)) -> schemas.TestQuestion:
    return db_transactions.get_random_word(session)


@app.get("/test_conjugation")
async def test_conjugation(session: Session = Depends(get_db)):
    return db_transactions.get_random_verb(session)


@app.get("/conjugate")
async def conjugate_(
    word: str, subject: str, mood: str = "Indicativo", tense: str = "presente"
) -> str:
    # assert subject in ["1s", "2s", "3s", "1p", "2p", "3p"]
    conjugated = conjugate.conjugate(word, subject, mood, tense)
    return conjugated
