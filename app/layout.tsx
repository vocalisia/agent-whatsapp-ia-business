import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}
