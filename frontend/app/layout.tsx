import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Congruency",
    description: "Welcome to Congruency",
};

const geistSans = Geist({
    display: "swap",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={geistSans.className}
            suppressHydrationWarning
        >
            <body>
                {/* Navbar */}
                <div className="flex items-center justify-between p-4 text-primary text-4xl my-6">
                    <div className="flex gap-16 ml-16">
                        <Link
                            href="/"
                            className="hover:font-bold hover:text-teal-400 duration-500"
                        >
                            <div className="active:font-medium duration-75">
                                Congruency
                            </div>
                        </Link>
                        <Link
                            href="/about"
                            className="hover:font-bold duration-500 hover:text-teal-400"
                        >
                            <div className="active:font-medium duration-75">
                                About
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-16 mr-16">
                        <Link
                            href="/sign-in"
                            className="hover:font-bold duration-500 hover:text-teal-400"
                        >
                            <div className="active:font-medium duration-75">
                                Login
                            </div>
                        </Link>
                        <Link
                            href="/sign-up"
                            className="hover:font-bold duration-500 hover:text-teal-400"
                        >
                            <div className="active:font-medium duration-75">
                                Sign Up
                            </div>
                        </Link>
                    </div>
                </div>
                <div>{children}</div>
            </body>
        </html>
    );
}
