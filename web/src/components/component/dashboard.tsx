/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { fakeEmails } from "@/data/fakeEmails";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

function DashboardPage() {
  const router = useRouter();
  const { setAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    router.push("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="flex">
        <aside className="sticky top-0 left-0 bg-card border-r h-screen w-16 flex flex-col items-center justify-start gap-4 py-4">
          <Link
            href="#"
            className="flex items-center justify-center rounded-md bg-primary text-primary-foreground w-10 h-10"
            prefetch={false}
          >
            <FolderArchiveIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center rounded-md bg-primary text-primary-foreground w-10 h-10"
            prefetch={false}
          >
            <MailIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center rounded-md bg-primary text-primary-foreground w-10 h-10"
            prefetch={false}
          >
            <FolderIcon className="w-5 h-5" />
          </Link>
        </aside>
        <div className="flex-1 flex flex-col">
          <header className=" sticky top-0 right-0 flex items-center justify-between h-16 px-6 border-b bg-card z-10">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <MailIcon className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold">Mailing Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <FilterIcon className="w-5 h-5 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Unread
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Read</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon">
                <RefreshCwIcon className="w-5 h-5 text-muted-foreground" />
              </Button>
              <Link href="/">
                <Button>Portfolio</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout}>
                {" "}
                <LogOut className="w-5 h-5 mr-2"/>
                Log Out
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            <div className="grid gap-4 p-6">
              {fakeEmails.map((email) => (
                <Card key={email.id}>
                  <CardContent className="grid gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 py-6">
                        <Avatar>
                          <AvatarImage src={email.sender.avatar} />
                          <AvatarFallback>
                            {email.sender.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{email.sender.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {email.sender.email}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-muted-foreground">
                          {email.time}
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-5 h-5 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{email.subject}</div>
                      <p className="text-muted-foreground">{email.body}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <FolderArchiveIcon className="w-5 h-5 text-muted-foreground" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <BookMarkedIcon className="w-5 h-5 text-muted-foreground" />
                        </Button>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {email.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Icons are defined as before

function BookMarkedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <polyline points="10 2 10 10 13 7 16 10 16 2" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function FolderArchiveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="15" cy="19" r="2" />
      <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
      <path d="M15 11v-1" />
      <path d="M15 17v-2" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

const Mailing = () => (
  <AuthProvider>
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  </AuthProvider>
);

export default Mailing;
