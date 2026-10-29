from typing import List, Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="API de Clientes", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ClienteCreate(BaseModel):
    nome: str
    email: str
    telefone: Optional[str] = ""
    empresa: Optional[str] = ""


class Cliente(ClienteCreate):
    id: int
    active: bool = True


clients_db: List[Cliente] = [
    Cliente(
        id=1,
        nome="Huginho",
        email="huginho@email.com",
        telefone="(11)5555-5555",
        empresa="Tech Solutions",
        active=True,
    ),
    Cliente(
        id=2,
        nome="Luluzinha",
        email="luluzinha@email.com",
        telefone="(11)6666-6666",
        empresa="Inovação Ltda",
        active=True,
    ),
]


@app.get("/api/clientes", response_model=List[Cliente])
def listar_clientes():
    return clients_db


@app.post("/api/clientes", response_model=Cliente, status_code=201)
def adicionar_cliente(client: ClienteCreate):
    novo_id = len(clients_db) + 1
    novo_cliente = Cliente(
        id=novo_id,
        nome=client.nome,
        email=client.email,
        telefone=client.telefone,
        empresa=client.empresa,
        active=True,
    )
    clients_db.append(novo_cliente)
    return novo_cliente

