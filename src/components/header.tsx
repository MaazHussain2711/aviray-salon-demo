"use client";
import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/site";
import { BookingButton } from "./appointment-provider";
export function Header() { const [open,setOpen]=useState(false); return (<header className="header">
<a className="brand" href="#home" aria-label="AVIRAY home"><Image src={asset("/assets/logo.png")} width={1602} height={594} alt="AVIRAY Unisex Salon" sizes="(max-width: 760px) 100vw, 50vw" /></a>
<button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation"><span></span><span></span></button>
<nav className={open ? "open" : ""} onClick={() => setOpen(false)} id="navigation" aria-label="Main navigation"><a href="#about">Our story</a><a href="#services">Services</a><a href="#inspiration">The edit</a><a href="#visit">Visit us</a><BookingButton className="button small">Make an appointment <span aria-hidden="true">↗</span></BookingButton></nav>
</header>); }