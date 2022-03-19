CREATE TABLE "to-do" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (999),
	"completed" BOOLEAN,
	"time-created" timestamp,
	"time-completed" timestamp
);

INSERT INTO "to-do" ("task", "completed", "time-created", "time-completed") 
VALUES ('Finish weekend coding project', false, '2022-03-19 08:15:06', NULL);