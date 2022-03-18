CREATE TABLE "to-do" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (999),
	"completed" BOOLEAN,
	"time-created" timestamp with time zone,
	"time-completed" timestamp with time zone
);