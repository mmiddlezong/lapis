-- CreateTable
CREATE TABLE "decks" (
    "data" JSONB,
    "id" SERIAL NOT NULL,

    CONSTRAINT "decks_pkey" PRIMARY KEY ("id")
);
