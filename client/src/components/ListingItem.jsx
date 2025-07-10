import { Link } from "react-router-dom"
import {MdLocationOn, MdPunchClock} from 'react-icons/md'

export default function ListingItem({listing}) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden
     rounded-lg w-full sm:w-[220px]">
        <Link to={`/listing/${listing._id}`}>
        <img src={listing.imageUrls[0]} alt="Listing Image" 
        className="h-[360px] sm:h-[220px] w-full object-cover hover:scale-105
        transition-scale duration-300"/>
        <div className="p-3 flex flex-col">
            <p className="font-semibold text-lg text-slate-700
            truncate">{listing.name}</p>
            <div className="flex items-center gap-1">
                <MdLocationOn className="h-4 w-4 text-green-600"/>
                <p className="text-sm truncate  text-gray-600">{listing.address}</p>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
            <p className="text-slate-500 font-semibold p-1 ">Rs.{listing.offer ? listing.discountPrice.toLocaleString('en-US') :listing.regularPrice.toLocaleString('en-US')}
                {listing.type==='rent'&&' / month'}
            </p>
            <div className="text-slate-700 flex gap-2">
                <div className="font-bold text-sm ">
                    {listing.bedrooms > 1? `${listing.bedrooms} Beds`:`${listing.bedrooms} Bed`}
                </div>
                <div className="font-bold text-sm ">
                    {listing.bathrooms > 1? `${listing.bathrooms} Baths`:`${listing.bathrooms} Bath`}
                </div>
            </div>
        </div>
   
        </Link>
        
    </div>
  )
}
