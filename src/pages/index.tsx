import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="/assets/logo.png"
            />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              inline
              label={
                <Avatar alt="User settings" img={user?.picture || ""} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.nickname}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link href="/api/auth/logout">Sign out</Link>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link active href="#">
              <p>Home</p>
            </Navbar.Link>
            <Navbar.Link href="/about-us">About Us</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <div className="flex justify-center my-8">
          <Button gradientDuoTone="greenToBlue">
            <Link href="/api/auth/login"> Login</Link>
          </Button>
        </div>
      )}
    </>
  );
}
