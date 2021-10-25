from typing import Optional
from pydantic import BaseModel


class Data(BaseModel):
    id: Optional[int]
    type: str
    word: str
    translation: str

    class Config:
        orm_mode = True


class TestQuestion(BaseModel):
    answer: Data
    options: list[Data]
