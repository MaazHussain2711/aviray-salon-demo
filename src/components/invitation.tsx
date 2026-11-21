import { BookingButton } from "./appointment-provider";

export function Invitation() { return (<section className="invitation"><div className="invitation-inner"><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Come as you are.<br />Leave <em>feeling like you.</em></h2><BookingButton className="button light">Let’s make it a date <span aria-hidden="true">↗</span></BookingButton></div><span className="invitation-flower" aria-hidden="true">✳</span></section>); }
