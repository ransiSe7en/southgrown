import { sqliteTable, text, primaryKey, index } from 'drizzle-orm/sqlite-core';
export const profiles = sqliteTable('profiles', { id: text('id').primaryKey(), data: text('data').notNull() });
export const listings = sqliteTable('listings', { id: text('id').primaryKey(), seller: text('seller').notNull(), data: text('data').notNull(), created: text('created').notNull() }, t => [index('listings_seller').on(t.seller)]);
export const threads = sqliteTable('threads', { id: text('id').primaryKey(), listing: text('listing').notNull(), buyer: text('buyer').notNull(), seller: text('seller').notNull(), created: text('created').notNull() }, t => [index('threads_buyer').on(t.buyer), index('threads_seller').on(t.seller)]);
export const messages = sqliteTable('messages', { id: text('id').primaryKey(), thread: text('thread').notNull(), sender: text('sender').notNull(), body: text('body').notNull(), created: text('created').notNull() }, t => [index('messages_thread').on(t.thread)]);
export const favorites = sqliteTable('favorites', { user: text('user').notNull(), listing: text('listing').notNull() }, t => [primaryKey({ columns: [t.user, t.listing] })]);
export const usage = sqliteTable('usage', { id: text('id').primaryKey(), user: text('user').notNull(), created: text('created').notNull() }, t => [index('usage_user').on(t.user)]);
