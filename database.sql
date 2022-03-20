CREATE TABLE "to-do" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (999),
	"completed" BOOLEAN,
	"timeCreated" timestamp,
	"timeCompleted" timestamp
);