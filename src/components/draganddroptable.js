// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// const userdata = {
//   data: [
//     {
//       name: "Jeevan",
//       age: 21,
//       gender: "male",
//     },
//     {
//       name: "Piyush",
//       age: 17,
//       gender: "male",
//     },
//     {
//       name: "Arti",
//       age: 22,
//       gender: "female",
//     },
//     {
//       name: "Subham",
//       age: 21,
//       gender: "male",
//     },
//     {
//       name: "Yuvraj",
//       age: 23,
//       gender: "male",
//     },
//   ],
// };
// export default function DragAndDrop() {
//   const [users, setUsers] = useState([]);

//   const handleDragEnd = (e) => {
//     if (!e.destination) return;
//     let tempData = Array.from(users);
//     let [source_data] = tempData.splice(e.source.index, 1);
//     tempData.splice(e.destination.index, 0, source_data);
//     setUsers(tempData);
//   };
//   useEffect(() => {
//     return setUsers(userdata?.data);
//   }, [userdata]);
//   return (
//     <>
//     <div className="App mt-4">
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <table className="table bordered">
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Age</th>
//               <th>Gender</th>
//               <th />
//             </tr>
//           </thead>
//           <Droppable droppableId="droppable-1">
//             {(provider) => (
//               <tbody
//                 className="text-capitalize"
//                 ref={provider.innerRef}
//                 {...provider.droppableProps}
//               >
//                 {users?.map((user, index) => (
//                   <Draggable
//                     key={user.name}
//                     draggableId={user.name}
//                     index={index}
//                   >
//                     {(provider) => (
//                       <tr {...provider.draggableProps} ref={provider.innerRef}>
//                         <td>{user.name}</td>
//                         <td>{user.age}</td>
//                         <td>{user.gender}</td>
//                         <td {...provider.dragHandleProps}>
//                           {" "}
//                           <DragIndicatorIcon />x{" "}
//                         </td>
//                       </tr>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provider.placeholder}
//               </tbody>
//             )}
//           </Droppable>
//           <Field name="image">
//             {" "}
//             {(imageProps: any) => {
//               const { field, form, meta } = imageProps;
//               const { setFieldValue } = form;
//               return (
//                 // UploadButtons('generalForm Image')
//                 <Stack>
//                    {" "}
//                   <Stack
//                     direction="row"
//                     alignItems="flex-start"
//                     justifyContent="space-between"
//                     spacing={1}
//                     marginTop={3}
//                   >
//                     {" "}
//                     <Typography
//                       variant="subtitle2"
//                       fontSize={14}
//                       component="span"
//                       width="150px"
//                     >
//                         Product Image
//                         {" "}
//                     </Typography>
//                     {" "}
//                     <Stack>
//                        {" "}
//                       <label htmlFor="contained-button-file">
//                           {" "}
//                         <Input
//                           accept="image/*"
//                           id="contained-button-file"
//                           multiple
//                           type="file"
//                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
//                             handleImageSelect(event);
//                             setFieldValue(
//                               "image",
//                               event.target?.files && event.target.files[0].name
//                             );
//                           }}
//                         />
//                           {" "}
//                         {/* Displaying image either by Raw data or by using URL */}
//                           {" "}
//                         {imageObject.imagePreview && (
//                           <img
//                             src={imageObject.imagePreview}
//                             width="128px"
//                             height="128px"
//                           />
//                         )}
//                           {" "}
//                         {!imageObject.imagePreview && (
//                           <Button
//                             variant="contained"
//                             size="small"
//                             component="span"
//                             disableRipple
//                             disableElevation
//                             disableTouchRipple
//                             sx={{
//                               whiteSpace: "nowrap",
//                               height: "128px",
//                               border: "1px dashed #C2C7D0",
//                               color: "#14151C",
//                               background: "#F3F4F6",
//                               display: "flex",
//                               flexDirection: "column",
//                               justifyContent: "center",
//                               alignItems: "center",
//                               ":hover": { background: "#C2C7D0" },
//                             }}
//                           >
//                              {" "}
//                             <AddIcon sx={{ color: "#696F88" }} /> Upload an
//                             image {" "}
//                           </Button>
//                         )}
//                          {" "}
//                       </label>
//                       {" "}
//                     </Stack>
//                     <Stack spacing={2}>
//                       {" "}
//                       <FormHelperText sx={{ fontSize: "11px" }}>
//                         JPG, JPEG, GIF or PNG. Max size of 60 KB
//                       </FormHelperText>
//                        {" "}
//                       <Stack
//                         direction="row"
//                         alignItems="center"
//                         justifyContent="center"
//                       >
//                         <PublishOutlinedIcon fontSize="inherit" />
//                         {" "}
//                         <Typography variant="body2">
//                           {" "}
//                           <label
//                             className={classes.rpPicture}
//                             htmlFor="contained-button-file2"
//                           >
//                              {" "}
//                             {imageObject.imagePreview && (
//                               <Input
//                                 accept="image/*"
//                                 id="contained-button-file2"
//                                 multiple
//                                 type="file"
//                                 onChange={(
//                                   event: ChangeEvent<HTMLInputElement>
//                                 ) => {
//                                   handleImageSelect(event);
//                                   setFieldValue(
//                                     "image",
//                                     event.target?.files &&
//                                       event.target.files[0].name
//                                   );
//                                 }}
//                               />
//                             )}
//                               Replace
//                             picture {" "}
//                           </label>
//                             {" "}
//                         </Typography>
//                          {" "}
//                       </Stack>
//                        {" "}
//                       <Stack
//                         className={classes.rmPicture}
//                         direction="row"
//                         alignItems="center"
//                         justifyContent="center"
//                         onClick={() => clearImageObject()}
//                       >
//                         <DeleteOutlinedIcon fontSize="inherit" />
//                         <Typography variant="body2">Remove picture</Typography>
//                       </Stack>
//                       {" "}
//                     </Stack>
//                      {" "}
//                   </Stack>
//                   {" "}
//                 </Stack>
//               );
//             }}
//               {" "}
//           </Field>
//           {" "}
//           <ErrorMessage name="image">
//             {" "}
//             {(
//               errorMsg:
//                 | boolean
//                 | React.ReactChild
//                 | React.ReactFragment
//                 | React.ReactPortal
//                 | null
//                 | undefined
//             ) => (
//               <FormHelperText error={true} className={classes.formHelperTextMr}>
//                  {errorMsg}{" "}
//               </FormHelperText>
//             )}
//             {" "}
//           </ErrorMessage>
//         </table>
//       </DragDropContext>
//     </div>
//     </>
//   );
// }
