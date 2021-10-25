from typing import Sequence
from sqlalchemy.orm import Session

from sqlalchemy.sql.expression import func

import models
import schemas


def get_words(db: Session) -> Sequence[schemas.Data]:
    results = db.query(models.Word).all()
    return results


def add_word(db: Session, data: schemas.Data) -> None:
    word = db.query(models.Word).filter_by(word=data.word).first()
    translation = db.query(models.Word).filter_by(translation=data.translation).first()
    if word or translation:
        return
    db_word = models.Word(
        id=data.id, type=data.type, word=data.word, translation=data.translation
    )
    db.add(db_word)
    db.commit()


def get_random_word(db: Session) -> schemas.TestQuestion:
    answer = db.query(models.Word).order_by(func.random()).first()
    if not answer:
        return schemas.TestQuestion()
    options = (
        db.query(models.Word)
        .filter_by(type=answer.type)
        .filter(models.Word.id != answer.id)
        .limit(3)
        .all()
    )
    return schemas.TestQuestion(answer=answer, options=options)


def get_random_verb(db: Session) -> str:
    answer = (
        db.query(models.Word).filter_by(type="Verb").order_by(func.random()).first()
    )
    if not answer:
        return ""
    return answer.word


def remove_word(db: Session, id: int) -> None:
    db.query(models.Word).filter_by(id=id).delete()
    db.commit()
