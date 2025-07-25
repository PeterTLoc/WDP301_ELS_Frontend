"use client";

import { AuthProvider } from "@/context/AuthContext";
import { CourseProvider } from "@/context/CourseContext";
import ToastProvider from "@/context/ToastContext";
import ConfirmationProvider from "@/context/ConfirmationContext";
import LayoutWrapper from "./LayoutWrapper";

export default function ClientProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToastProvider>
      <AuthProvider>
        <ConfirmationProvider>
          <CourseProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CourseProvider>
        </ConfirmationProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
