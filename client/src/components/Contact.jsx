import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function Contact({listing}) {
    const [owner,setOwner]=useState(null)
    const [message,setMessage]=useState('');
    useEffect(()=>{
        const fetchOwner=async()=>{
            try {
                const res=await fetch(`/api/user/${listing.userRef}`);
                const data=await res.json()
                setOwner(data)
                
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchOwner()
    },[listing.userRef])
    const onChange=(e)=>{
        setMessage(e.target.value);
    }

  return (
    <>
    {owner && (
        <div className=" flex flex-col gap-2">
            <p>Contact <span className="font-semibold">{owner.username}</span> for 
            <span className="font-semibold">{listing.name.toLowerCase()}</span> </p>
            <textarea name="message" id="message" rows='2' value={message} onChange={onChange}
            placeholder="Enter your message here..." className="w-full border border-slate-500
            rounded-lg p-2 mt-2 "></textarea>
            <Link to={`mailto:${owner.email}?subject=Regarding
            ${listing.name}&body=${message}`} 
            className="bg-slate-700 text-white text-center p-3 rounded-lg uppercase 
            hover:opacity-95">
            Send message
            </Link>
        </div>
    )}
    </>
  )
}
