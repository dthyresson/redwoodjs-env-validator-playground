# Migration `20200703171252-create-notice`

This migration has been generated by A. David Thyresson at 7/3/2020, 5:12:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Notice" (
"id" SERIAL,"message" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200703171252-create-notice
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+datasource DS {
+  provider = "postgres"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model Notice {
+  id      Int    @id @default(autoincrement())
+  message String
+}
```

