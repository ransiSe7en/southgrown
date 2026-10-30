CREATE TABLE `favorites` (
	`user` text NOT NULL,
	`listing` text NOT NULL,
	PRIMARY KEY(`user`, `listing`)
);
--> statement-breakpoint
CREATE TABLE `listings` (
	`id` text PRIMARY KEY NOT NULL,
	`seller` text NOT NULL,
	`data` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `listings_seller` ON `listings` (`seller`);--> statement-breakpoint
CREATE TABLE `messages` (
	`id` text PRIMARY KEY NOT NULL,
	`thread` text NOT NULL,
	`sender` text NOT NULL,
	`body` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `messages_thread` ON `messages` (`thread`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `threads` (
	`id` text PRIMARY KEY NOT NULL,
	`listing` text NOT NULL,
	`buyer` text NOT NULL,
	`seller` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `threads_buyer` ON `threads` (`buyer`);--> statement-breakpoint
CREATE INDEX `threads_seller` ON `threads` (`seller`);--> statement-breakpoint
CREATE TABLE `usage` (
	`id` text PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `usage_user` ON `usage` (`user`);