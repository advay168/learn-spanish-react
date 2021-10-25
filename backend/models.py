from sqlalchemy import Column, Integer, String

from database import Base


class Word(Base):  # type: ignore
    __tablename__ = "words"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String)
    word = Column(String)
    translation = Column(String)
