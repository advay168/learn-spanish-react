import os

DB_URI = os.getenv(
    "DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/learn-spanish"
)
if DB_URI.startswith("postgres://"):
    DB_URI = DB_URI.replace("postgres://", "postgresql://", 1)

CORS_ALLOWED_ORIGINS = (
    "http://localhost:3000",
    "https://learn-spanish.herokuapp.com",
    "https://learn-spanish.onrender.com",
)
