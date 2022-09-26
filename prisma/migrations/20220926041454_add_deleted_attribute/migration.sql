-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "date" TEXT,
    "link" TEXT,
    "isEvent" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Articles" ("author", "content", "date", "id", "isEvent", "link", "title") SELECT "author", "content", "date", "id", "isEvent", "link", "title" FROM "Articles";
DROP TABLE "Articles";
ALTER TABLE "new_Articles" RENAME TO "Articles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
