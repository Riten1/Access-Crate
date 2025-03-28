// import { Contact01Icon, Mail01Icon, UserIcon } from "hugeicons-react";

// import { OrganizerData } from "../../@types/organizers";
// import { formatDate } from "../../utils/format-date";

// export const OrganizerAbout = ({
//   organizer,
//   upcommingEvents,
// }: {
//   organizer: OrganizerData | undefined;
//   upcommingEvents: number | undefined;
// }) => {
//   return (
//     <div className="flex w-full flex-col gap-12 ">
//       <div className="flex flex-col gap-6">
//         <div className="text-2xl font-semibold text-white">
//           About {organizer?.organizer_name}
//         </div>

//         <div className="flex w-[30%] flex-col gap-4 rounded-xl bg-supporting-bg p-4 text-core-secondary">
//           <div className="flex items-center gap-2">
//             <UserIcon className="text-core-primary" />
//             <p> {organizer?.owner_name}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Contact01Icon className="text-core-primary" />
//             <p> {organizer?.contact_info}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Mail01Icon className="text-core-primary" />
//             <p> {organizer?.email}</p>
//           </div>
//         </div>
//       </div>
//       <hr />

//       <div className="flex flex-col gap-8">
//         <p className="text-2xl font-semibold text-white">Event History</p>
//         <div className="text-white">
//           <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 bg-supporting-bg rounded-xl py-5">
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-2xl font-bold">{organizer?.total_events}</p>
//               <p className="text-core-secondary text-sm">Total Events</p>
//             </div>
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-2xl font-bold">{upcommingEvents}</p>
//               <p className="text-core-secondary text-sm">Upcoming</p>
//             </div>
//             {/* <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-2xl font-bold">{organizer.attendeeCount}</p>
//               <p className="text-muted-foreground text-sm">Total Attendees</p>
//             </div> */}
//             <div className="bg-muted/30 rounded-lg p-4">
//               <p className="text-2xl font-bold">
//                 {formatDate(organizer?.createdAt)}
//               </p>
//               <p className="text-core-secondary text-sm">Est. Year</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
