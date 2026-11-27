"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, MapPin, Menu, Phone, ShieldCheck, Sparkles, Wifi, X } from "lucide-react";

const photos = [
  { src: "/gallery/01-lounge-red-sofa.jpg", title: "A welcoming lounge", type: "Living spaces" },
  { src: "/gallery/02-lounge-fireplace.jpg", title: "Relax and unwind", type: "Living spaces" },
  { src: "/gallery/03-bedroom-grey.jpg", title: "Restful bedroom", type: "Bedrooms" },
  { src: "/gallery/04-bedroom-gold.jpg", title: "Warm, inviting interiors", type: "Bedrooms" },
  { src: "/gallery/05-kitchen-and-appliances.jpg", title: "A fully equipped kitchen", type: "Kitchens" },
  { src: "/gallery/06-apartment-building.jpg", title: "The Naiva Heights residence", type: "Property" },
  { src: "/gallery/07-bedroom-red-accents.jpg", title: "Comfort in every detail", type: "Bedrooms" },
  { src: "/gallery/08-bedroom-blue-accents.jpg", title: "A calm place to recharge", type: "Bedrooms" },
  { src: "/gallery/09-kitchen-galley.jpg", title: "Practical kitchen space", type: "Kitchens" },
  { src: "/gallery/10-bathroom.jpg", title: "Private bathroom", type: "Bathrooms" },
  { src: "/gallery/11-building-front-gate.jpg", title: "A secure entrance", type: "Property" },
  { src: "/gallery/12-bedroom-green-accents.jpg", title: "A touch of elegance", type: "Bedrooms" },
  { src: "/gallery/13-dining-area.jpg", title: "Dining space", type: "Living spaces" },
  { src: "/gallery/14-kitchen-fridge-and-stove.jpg", title: "Kitchen essentials", type: "Kitchens" },
  { src: "/gallery/15-bathroom-window.jpg", title: "Bright bathroom", type: "Bathrooms" },
  { src: "/gallery/16-apartment-hallway.jpg", title: "Thoughtful interiors", type: "Property" },
  { src: "/gallery/17-kitchen-window.jpg", title: "Kitchen with natural light", type: "Kitchens" },
  { src: "/gallery/18-parking-and-compound.jpg", title: "On-site parking area", type: "Property" },
  { src: "/gallery/19-lounge-blue-sofa.jpg", title: "A relaxed place to gather", type: "Living spaces" },
];

const features = [
  { icon: Wifi, title: "Stay connected", text: "Ask us about internet availability for your stay." },
  { icon: ShieldCheck, title: "Peace of mind", text: "A gated property with a defined entrance." },
  { icon: Sparkles, title: "A place to settle in", text: "Furnished living spaces designed for comfort." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", dates: "", guests: "2", message: "" });
  const nav = [{ label: "The apartments", href: "#apartments" }, { label: "Gallery", href: "#gallery" }, { label: "Amenities", href: "#amenities" }, { label: "Location", href: "#location" }];

  function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Hello Naiva Heights, I'd like to enquire about a stay.\nName: ${form.name}\nPhone: ${form.phone}\nDates: ${form.dates}\nGuests: ${form.guests}\nMessage: ${form.message}`);
    window.open(`https://wa.me/254798940055?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <main>
      <header className="header">
        <a href="#" className="brand"><span className="brand-mark">N</span><span>NAIVA <b>HEIGHTS</b><small>STAY A LITTLE LONGER</small></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>{nav.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>)}</nav>
        <a className="header-cta" href="#enquire">Enquire now <ArrowRight size={16}/></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="trust-bar" aria-label="Guest rating">
        <div className="trust-inner">
          <div className="trust-rating"><span className="trust-stars" aria-label="4.3 out of 5 stars">★★★★★</span><strong>4.3/5</strong><span className="trust-divider">|</span><span>66 Google reviews</span></div>
          <a href="https://wa.me/254798940055?text=Hello%20Naiva%20Heights%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer"><span className="online-dot"/> Chat with Naiva Heights <ArrowRight size={14}/></a>
        </div>
      </section>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span/> YOUR NAIVASHA ESCAPE</p>
          <h1>Make room<br/><em>for comfort.</em></h1>
          <p className="hero-copy">A welcoming place to pause, settle in and enjoy your time in Naivasha.</p>
          <div className="hero-actions"><a className="button button-light" href="#apartments">Explore the apartments <ArrowRight size={17}/></a><a className="text-link light-link" href="#enquire">Plan your stay <ArrowDown size={15}/></a></div>
        </div>
        <div className="hero-note"><span>01 / 19</span><span>FURNISHED APARTMENT LIVING</span></div>
      </section>

      <section className="intro section-wrap" id="apartments">
        <div className="intro-label"><span className="eyebrow">WELCOME TO NAIVA HEIGHTS</span><span className="thin-line"/></div>
        <div className="intro-grid"><h2>More than a place<br/>to sleep. <em>A place<br/>to feel at home.</em></h2><div className="intro-text"><p>Settle into furnished apartment spaces with inviting lounges, comfortable bedrooms and practical kitchen facilities. Whether you are visiting Naivasha for a short break or a longer stay, Naiva Heights offers room to make yourself comfortable.</p><a className="under-link" href="#gallery">Discover the spaces <ArrowRight size={16}/></a></div></div>
      </section>

      <section className="feature-strip" id="amenities"><div className="feature-inner">{features.map(({icon:Icon,title,text})=><article className="feature" key={title}><Icon size={22} strokeWidth={1.4}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="gallery-section section-wrap" id="gallery">
        <div className="section-heading"><div><p className="eyebrow">A CLOSER LOOK</p><h2>Spaces to <em>settle into.</em></h2></div><p className="heading-note">Explore the rooms, living areas and shared spaces at Naiva Heights.</p></div>
        <div className="gallery-grid">{photos.map((photo,i)=><button className={i===0||i===5||i===10 ? "gallery-card gallery-tall" : "gallery-card"} key={photo.src} onClick={()=>setActivePhoto(i)}><img src={photo.src} alt={photo.title}/><span className="photo-caption"><small>{photo.type}</small><b>{photo.title}</b></span></button>)}</div>
      </section>

      <section className="location-section" id="location"><div className="location-photo"/><div className="location-copy"><p className="eyebrow light">FIND YOUR WAY HERE</p><h2>Your Naivasha<br/><em>home base.</em></h2><p>Find Naiva Heights in the Karagita area of Naivasha. Contact the team before travelling for directions and arrival arrangements.</p><div className="address"><MapPin size={18}/><span>6CQV+QMV, Karagita, Naivasha, Kenya</span></div><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Naiva+Heights+Karagita+Naivasha" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16}/></a></div></section>

      <section className="enquiry section-wrap" id="enquire"><div className="enquiry-copy"><p className="eyebrow">LET'S PLAN YOUR STAY</p><h2>Your next stay<br/>starts <em>right here.</em></h2><p>Tell us a little about your visit and the Naiva Heights team can get back to you with availability and rates.</p><a className="phone-link" href="tel:+254798940055"><Phone size={17}/> +254 798 940 055</a></div><form className="enquiry-form" onSubmit={submitEnquiry}><div className="form-top"><span>01</span><p>STAY ENQUIRY</p></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name"/></label><div className="form-row"><label>Phone number<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+254..."/></label><label>Preferred dates<input value={form.dates} onChange={e=>setForm({...form,dates:e.target.value})} placeholder="e.g. 12–15 December"/></label></div><label>Number of guests<select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label><label>Anything else? <textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us what you need..."/></label><button className="button button-dark submit-button" type="submit">Send enquiry on WhatsApp <ArrowRight size={17}/></button>{sent&&<p className="form-success"><Check size={15}/> Your WhatsApp enquiry has been prepared.</p>}<small className="form-disclaimer">Availability and rates are confirmed directly by the property.</small></form></section>

      <a className="floating-whatsapp" href="https://wa.me/254798940055?text=Hello%20Naiva%20Heights%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay." target="_blank" rel="noreferrer" aria-label="Chat with Naiva Heights on WhatsApp"><span className="whatsapp-icon">◔</span><span>WhatsApp us</span></a>

      <footer className="footer"><div className="footer-main"><a href="#" className="brand brand-footer"><span className="brand-mark">N</span><span>NAIVA <b>HEIGHTS</b><small>STAY A LITTLE LONGER</small></span></a><p>Comfortable apartment living<br/>in the heart of Naivasha.</p><a href="https://wa.me/254798940055" className="footer-contact">Start a conversation <ArrowRight size={16}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Naiva Heights. All rights reserved.</span><span>KARAGITA · NAIVASHA · KENYA</span></div></footer>

      {activePhoto!==null&&<div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setActivePhoto(null)}><button className="lightbox-close" aria-label="Close"><X/></button><button className="lightbox-arrow prev" aria-label="Previous" onClick={e=>{e.stopPropagation();setActivePhoto((activePhoto+photos.length-1)%photos.length)}}><ChevronLeft/></button><img src={photos[activePhoto].src} alt={photos[activePhoto].title} onClick={e=>e.stopPropagation()}/><button className="lightbox-arrow next" aria-label="Next" onClick={e=>{e.stopPropagation();setActivePhoto((activePhoto+1)%photos.length)}}><ChevronRight/></button><p>{photos[activePhoto].title} <span>{activePhoto+1} / {photos.length}</span></p></div>}
    </main>
  );
}