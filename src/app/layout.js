import NProgress from "@/components/progressBar/NProgress";
import { CookiesProvider } from "next-client-cookies/server";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import GoogleAnalytics from "@/utils/GoogleAnalytics";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Saidur Rahman | Accountability Coach",
    description:
        "I help entrepreneurs improve productivity; achieve goals by keeping them accountable for habits and actions. Are you struggling to improve your business, productivity, get more done and to achieve your goals? If you’re interested in getting more out of your life & business contact me for the FREE discovery call.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className}`}
                suppressHydrationWarning={true}
            >
                {/* Google analytics */}
                <GoogleAnalytics />
                {/* Google analytics */}

                <NProgress />
                <ToastContainer />
                <CookiesProvider>{children}</CookiesProvider>
            </body>
        </html>
    );
}
