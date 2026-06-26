import {
  buildEditorialPolicyMetadata,
  EditorialPolicyPage,
} from "@/lib/editorial-policy-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildEditorialPolicyMetadata(locale, "diversite");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <EditorialPolicyPage locale={locale} policy="diversite" />;
}
