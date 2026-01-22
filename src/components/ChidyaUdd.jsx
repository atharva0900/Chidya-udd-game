// ----------------------------------------------------------------------perfect____________________________________________________
// import React, { useEffect, useRef, useState } from "react";

// const FLYING = [
//   { emoji: "🦅", canFly: true },
//   { emoji: "✈️", canFly: true },
//   { emoji: "🚁", canFly: true },
//   { emoji: "🦋", canFly: true },
// ];

// const NON_FLYING = [
//   { emoji: "🐶", canFly: false },
//   { emoji: "🏠", canFly: false },
//   { emoji: "🚗", canFly: false },
//   { emoji: "🌳", canFly: false },
// ];

// const SPEED = 1200; // time between images
// const REACTION_TIME = 500; // time player has to react

// export default function ChidiyaUdd() {
//   const [obj, setObj] = useState(null);
//   const [score, setScore] = useState(0);
//   const [holding, setHolding] = useState(false);
//   const [running, setRunning] = useState(false);
//   const [countdown, setCountdown] = useState(null);

//   const loopRef = useRef(null);
//   const reactionRef = useRef(null);
//   const holdingRef = useRef(false);

//   useEffect(() => {
//     holdingRef.current = holding;
//   }, [holding]);

//   const randomObj = () => {
//     const pool = Math.random() < 0.5 ? FLYING : NON_FLYING;
//     return pool[Math.floor(Math.random() * pool.length)];
//   };

//   const stop = () => {
//     clearInterval(loopRef.current);
//     clearTimeout(reactionRef.current);
//     setRunning(false);
//     setObj(null);
//   };

//   const showNext = () => {
//     const next = randomObj();
//     setObj(next);

//     clearTimeout(reactionRef.current);

//     // wait before judging
//     reactionRef.current = setTimeout(() => {
//       const correct =
//         (next.canFly && !holdingRef.current) ||
//         (!next.canFly && holdingRef.current);

//       if (correct) {
//         setScore((s) => s + 1);
//       } else {
//         stop();
//       }
//     }, REACTION_TIME);
//   };

//   const start = () => {
//     setScore(0);
//     setRunning(true);
//     setObj(null);

//     let c = 3;
//     setCountdown(c);

//     const cd = setInterval(() => {
//       c--;
//       if (c === 0) {
//         clearInterval(cd);
//         setCountdown(null);
//         showNext();
//         loopRef.current = setInterval(showNext, SPEED);
//       } else {
//         setCountdown(c);
//       }
//     }, 1000);
//   };

//   const handleDown = () => {
//     setHolding(true);
//     if (!running) start();
//   };

//   const handleUp = () => {
//     setHolding(false);
//   };

//   // return (
//   //   <div style={{ textAlign: "center", padding: 20 }}>
//   //     <h1>Chidiya Udd</h1>

//   //     <div style={{ fontSize: 120, height: 150 }}>
//   //       {countdown ? countdown : obj ? obj.emoji : "🎯"}
//   //     </div>

//   //     <h2>Score: {score}</h2>
//   //     {!running && score > 0 && <h3>Game Over</h3>}

//   //     <button
//   //       onMouseDown={handleDown}
//   //       onMouseUp={handleUp}
//   //       onTouchStart={handleDown}
//   //       onTouchEnd={handleUp}
//   //       style={{
//   //         padding: 20,
//   //         width: "100%",
//   //         background: holding ? "orange" : "gold",
//   //         fontSize: 20,
//   //       }}
//   //     >
//   //       {holding ? "Holding…" : "Chidiya Uddao"}
//   //     </button>
//   //   </div>
//   // );

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#0b1220",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "system-ui",
//       }}
//     >
//       <div
//         style={{
//           width: 360,
//           background: "#111827",
//           borderRadius: 24,
//           padding: 20,
//           boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
//           display: "flex",
//           flexDirection: "column",
//           gap: 16,
//         }}
//       >
//         {/* Header */}
//         <div style={{ textAlign: "center" }}>
//           <div
//             style={{
//               color: "#38bdf8",
//               fontSize: 14,
//               letterSpacing: 2,
//             }}
//           >
//             CHIDIYA UDD
//           </div>

//           <div
//             style={{
//               color: "white",
//               fontSize: 48,
//               fontWeight: "800",
//               lineHeight: 1,
//             }}
//           >
//             {score}
//           </div>

//           <div
//             style={{
//               color: running ? "#22c55e" : "#ef4444",
//               fontSize: 12,
//               letterSpacing: 1,
//             }}
//           >
//             {running ? "ACTIVE" : score > 0 ? "GAME OVER" : "READY"}
//           </div>
//         </div>

//         {/* Game Area */}
//         <div
//           style={{
//             flex: 1,
//             background: "#020617",
//             borderRadius: 20,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: 120,
//             color: "white",
//             border: "1px solid #1f2937",
//           }}
//         >
//           {countdown ? countdown : obj ? obj.emoji : "🎯"}
//         </div>

//         {/* Button */}
//         <button
//           onMouseDown={handleDown}
//           onMouseUp={handleUp}
//           onTouchStart={handleDown}
//           onTouchEnd={handleUp}
//           style={{
//             height: 64,
//             borderRadius: 16,
//             border: "none",
//             fontSize: 18,
//             fontWeight: 700,
//             background: holding ? "#38bdf8" : "#1f2937",
//             color: holding ? "#020617" : "#e5e7eb",
//             transition: "0.12s",
//           }}
//         >
//           {holding ? "HOLDING…" : "CHIDIYA UDDAO"}
//         </button>
//       </div>
//     </div>

//   );
// }
// ----------------------------------------------------------------------perfect____________________________________________________

// import React, { useEffect, useRef, useState } from "react";

// const FLYING = [
//   { emoji: "🦅", name: "Eagle", canFly: true, color: "#2563eb" },
//   { emoji: "✈️", name: "Plane", canFly: true, color: "#dc2626" },
//   { emoji: "🚁", name: "Helicopter", canFly: true, color: "#059669" },
//   { emoji: "🦋", name: "Butterfly", canFly: true, color: "#7c3aed" },
//   { emoji: "🦆", name: "Duck", canFly: true, color: "#ea580c" },
//   { emoji: "🪰", name: "Fly", canFly: true, color: "#7c2d12" },
// ];

// const NON_FLYING = [
//   { emoji: "🐶", name: "Dog", canFly: false, color: "#ea580c" },
//   { emoji: "🏠", name: "House", canFly: false, color: "#d97706" },
//   { emoji: "🚗", name: "Car", canFly: false, color: "#0ea5e9" },
//   { emoji: "🌳", name: "Tree", canFly: false, color: "#16a34a" },
//   { emoji: "🐱", name: "Cat", canFly: false, color: "#f59e0b" },
//   { emoji: "🪑", name: "Chair", canFly: false, color: "#92400e" },
// ];

// const SPEED = 2000;
// const REACTION_TIME = 500;

// export default function ChidiyaUdd() {
//   const [obj, setObj] = useState(null);
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);
//   const [holding, setHolding] = useState(false);
//   const [running, setRunning] = useState(false);
//   const [countdown, setCountdown] = useState(null);
//   const [showInstruction, setShowInstruction] = useState(true);
//   const [audioEnabled, setAudioEnabled] = useState(true);
//   const [gameMessage, setGameMessage] = useState("");
//   const [fingerUp, setFingerUp] = useState(false);
//   const [isWrong, setIsWrong] = useState(false);
//   const [gameSpeed, setGameSpeed] = useState(SPEED);
//   const [showFeedback, setShowFeedback] = useState(null);

//   const loopRef = useRef(null);
//   const reactionRef = useRef(null);
//   const holdingRef = useRef(false);
//   const consecutiveCorrectRef = useRef(0);

//   useEffect(() => {
//     holdingRef.current = holding;
//   }, [holding]);

//   useEffect(() => {
//     const savedHighScore = localStorage.getItem("chidiyaUddHighScore");
//     if (savedHighScore) {
//       setHighScore(parseInt(savedHighScore));
//     }
//   }, []);

//   const randomObj = () => {
//     const pool = Math.random() < 0.5 ? FLYING : NON_FLYING;
//     return pool[Math.floor(Math.random() * pool.length)];
//   };

//   const stop = () => {
//     clearInterval(loopRef.current);
//     clearTimeout(reactionRef.current);
//     setRunning(false);
//     setObj(null);
//     setFingerUp(false);
//     setIsWrong(true);
//     setShowFeedback("wrong");

//     if (score > highScore) {
//       setHighScore(score);
//       localStorage.setItem("chidiyaUddHighScore", score.toString());
//       setGameMessage(`🎉 New High Score: ${score}!`);
//     } else {
//       setGameMessage(`Game Over! Score: ${score}`);
//     }

//     consecutiveCorrectRef.current = 0;
//     setGameSpeed(SPEED);

//     setTimeout(() => {
//       setIsWrong(false);
//       setShowInstruction(true);
//       setShowFeedback(null);
//     }, 2000);
//   };

//   const showNext = () => {
//     const next = randomObj();
//     setObj(next);
//     setGameMessage("");
//     setShowFeedback(null);

//     clearTimeout(reactionRef.current);

//     setFingerUp(false);

//     reactionRef.current = setTimeout(() => {
//       const correct =
//         (next.canFly && !holdingRef.current) ||
//         (!next.canFly && holdingRef.current);

//       if (correct) {
//         setScore((s) => s + 1);
//         consecutiveCorrectRef.current += 1;
//         setShowFeedback("correct");

//         if (consecutiveCorrectRef.current % 5 === 0 && gameSpeed > 1000) {
//           setGameSpeed((prev) => Math.max(1000, prev - 200));
//         }

//         if (next.canFly) {
//           setFingerUp(true);
//         } else {
//           setFingerUp(false);
//         }
//       } else {
//         setShowFeedback("wrong");
//         stop();
//       }
//     }, REACTION_TIME);
//   };

//   const start = () => {
//     setScore(0);
//     setRunning(true);
//     setObj(null);
//     setGameMessage("");
//     setShowInstruction(false);
//     setIsWrong(false);
//     setFingerUp(false);
//     setShowFeedback(null);
//     consecutiveCorrectRef.current = 0;
//     setGameSpeed(SPEED);
//     setHolding(false);

//     let c = 3;
//     setCountdown(c);

//     const cd = setInterval(() => {
//       c--;
//       if (c === 0) {
//         clearInterval(cd);
//         setCountdown(null);
//         showNext();
//         loopRef.current = setInterval(showNext, gameSpeed);
//       } else {
//         setCountdown(c);
//       }
//     }, 1000);
//   };

//   const handleDown = () => {
//     if (!running && score === 0) {
//       start();
//       return;
//     }

//     if (!running) return;

//     setHolding(true);
//     setFingerUp(false);
//   };

//   const handleUp = () => {
//     if (!running) return;

//     setHolding(false);
//     setFingerUp(true);
//   };

//   const toggleAudio = () => {
//     setAudioEnabled(!audioEnabled);
//   };

//   const resetGame = () => {
//     clearInterval(loopRef.current);
//     clearTimeout(reactionRef.current);
//     setRunning(false);
//     setScore(0);
//     setGameMessage("");
//     setShowInstruction(true);
//     setFingerUp(false);
//     setHolding(false);
//     setIsWrong(false);
//     setShowFeedback(null);
//   };

//   const getFeedbackColor = () => {
//     if (showFeedback === "correct") return "#22c55e";
//     if (showFeedback === "wrong") return "#dc2626";
//     return null;
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "'Baloo 2', cursive, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         padding: "10px",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Background texture */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23dc2626' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: "none",
//         }}
//       ></div>

//       <div
//         style={{
//           width: "100%",
//           maxWidth: "800px",
//           minWidth: "300px",
//           background: "#fff9e6",
//           borderRadius: "24px",
//           padding: "20px",
//           boxShadow: `
//             0 10px 30px rgba(120, 53, 15, 0.15),
//             inset 0 1px 0 rgba(255, 255, 255, 0.3),
//             inset 0 -1px 0 rgba(0, 0, 0, 0.1)
//           `,
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//           position: "relative",
//           border: "3px solid #d97706",
//           overflow: "hidden",
//           margin: "auto",
//           boxSizing: "border-box",
//           height: "95vh",
//           maxHeight: "700px",
//         }}
//       >
//         {/* Top Bar - Score, High Score, and Audio */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "10px",
//             flexWrap: "wrap",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//               flex: 1,
//               minWidth: "200px",
//             }}
//           >
//             <div
//               style={{
//                 background: "#dc2626",
//                 color: "white",
//                 padding: "8px 16px",
//                 borderRadius: "20px",
//                 fontSize: "16px",
//                 fontWeight: "800",
//                 boxShadow: "0 4px 8px rgba(220, 38, 38, 0.3)",
//                 textAlign: "center",
//                 flex: 1,
//               }}
//             >
//               SCORE: {score}
//             </div>

//             <div
//               style={{
//                 background: "#059669",
//                 color: "white",
//                 padding: "8px 16px",
//                 borderRadius: "20px",
//                 fontSize: "16px",
//                 fontWeight: "800",
//                 boxShadow: "0 4px 8px rgba(5, 150, 105, 0.3)",
//                 textAlign: "center",
//                 flex: 1,
//               }}
//             >
//               HIGH: {highScore}
//             </div>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <button
//               onClick={toggleAudio}
//               style={{
//                 width: "45px",
//                 height: "45px",
//                 borderRadius: "50%",
//                 border: "none",
//                 background: audioEnabled ? "#dc2626" : "#4b5563",
//                 color: "white",
//                 fontSize: "20px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                 cursor: "pointer",
//                 flexShrink: 0,
//               }}
//             >
//               {audioEnabled ? "🔊" : "🔇"}
//             </button>
//           </div>
//         </div>

//         {/* Title */}
//         <div
//           style={{
//             textAlign: "center",
//           }}
//         >
//           <div
//             style={{
//               color: "#dc2626",
//               fontSize: "38px",
//               fontWeight: "800",
//               textShadow: "2px 2px 0 #fbbf24",
//               letterSpacing: "1px",
//               transform: "rotate(-2deg)",
//               fontFamily: "'Kalam', cursive",
//               marginBottom: "5px",
//             }}
//           >
//             CHIDIYA UD
//           </div>
//           <div
//             style={{
//               color: "#7c2d12",
//               fontSize: "14px",
//               opacity: 0.8,
//             }}
//           >
//             {running
//               ? "GAME ACTIVE"
//               : score > 0
//                 ? "GAME OVER"
//                 : "CLASSIC INDIAN GAME"}
//           </div>
//         </div>

//         {/* Main Content Area - Game and Instructions Side by Side */}
//         <div
//           style={{
//             display: "flex",
//             flex: 1,
//             gap: "20px",
//             minHeight: 0,
//             overflow: "hidden",
//           }}
//         >
//           {/* Left Side - Game Area */}
//           <div
//             style={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               minWidth: 0,
//               minHeight: 0,
//             }}
//           >
//             <div
//               style={{
//                 background: "#fbbf24",
//                 borderRadius: "20px",
//                 flex: 1,
//                 position: "relative",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: `
//                 inset 0 8px 20px rgba(120, 53, 15, 0.2),
//                 0 8px 20px rgba(120, 53, 15, 0.15)
//               `,
//                 border: "6px solid #ea580c",
//                 padding: "20px",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Single Hand */}
//               <div
//                 style={{
//                   position: "relative",
//                   width: "140px",
//                   height: "160px",
//                   marginBottom: "20px",
//                   transform: isWrong ? "translateY(10px)" : "translateY(0)",
//                   transition: "transform 0.2s ease",
//                   flexShrink: 0,
//                 }}
//               >
//                 {/* Hand base */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     width: "100%",
//                     height: "45%",
//                     background: "#8B4513",
//                     borderRadius: "25px 25px 15px 15px",
//                     boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
//                   }}
//                 ></div>

//                 {/* Finger */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "45%",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "30%",
//                     height: fingerUp ? "75%" : "55%",
//                     background: "#CD853F",
//                     borderRadius: "15px 15px 8px 8px",
//                     transformOrigin: "bottom center",
//                     transform: `translateX(-50%) ${fingerUp ? "translateY(-20px)" : "translateY(0)"}`,
//                     transition:
//                       "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//                     boxShadow: fingerUp
//                       ? "0 10px 20px rgba(0,0,0,0.4)"
//                       : "0 6px 12px rgba(0,0,0,0.3)",
//                     border: showFeedback
//                       ? `4px solid ${getFeedbackColor()}`
//                       : "none",
//                   }}
//                 ></div>

//                 {/* Finger tip */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: fingerUp
//                       ? "calc(45% + 75% - 8px)"
//                       : "calc(45% + 55% - 8px)",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "30%",
//                     height: "12%",
//                     background: "#D2691E",
//                     borderRadius: "15px 15px 10px 10px",
//                     transition:
//                       "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//                   }}
//                 ></div>
//               </div>

//               {/* Current Object Display - BIGGER */}
//               <div
//                 style={{
//                   background: "white",
//                   borderRadius: "50%",
//                   width: "180px",
//                   height: "180px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 10px 25px rgba(120, 53, 15, 0.4)",
//                   border: `6px solid ${obj ? (obj.canFly ? "#dc2626" : "#059669") : "#d97706"}`,
//                   transform: isWrong ? "scale(0.95)" : "scale(1)",
//                   transition: "all 0.3s ease",
//                   flexShrink: 0,
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "80px",
//                     marginBottom: "10px",
//                     lineHeight: 1,
//                   }}
//                 >
//                   {countdown ? countdown : obj ? obj.emoji : "🎯"}
//                 </div>
//                 {obj && (
//                   <div
//                     style={{
//                       color: obj.canFly ? "#dc2626" : "#059669",
//                       fontSize: "18px",
//                       fontWeight: "600",
//                       fontFamily: "'Kalam', cursive",
//                       textAlign: "center",
//                     }}
//                   >
//                     {obj.name}
//                   </div>
//                 )}
//               </div>

//               {/* Finger State Indicator */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "15px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   background: holding ? "#059669" : "#dc2626",
//                   color: "white",
//                   padding: "8px 20px",
//                   borderRadius: "20px",
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {holding ? "FINGER DOWN" : "FINGER UP"}
//               </div>
//             </div>

//             {/* Game Message */}
//             {gameMessage && (
//               <div
//                 style={{
//                   textAlign: "center",
//                   color: "#dc2626",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   padding: "10px",
//                   background: "rgba(251, 191, 36, 0.3)",
//                   borderRadius: "12px",
//                   border: "2px dashed #d97706",
//                   marginTop: "10px",
//                 }}
//               >
//                 {gameMessage}
//               </div>
//             )}
//           </div>

//           {/* Right Side - Instructions */}
//           <div
//             style={{
//               flex: "0 0 300px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//               minHeight: 0,
//               overflow: "hidden",
//             }}
//           >
//             {/* Game Controls */}
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "10px",
//                 background: "rgba(251, 191, 36, 0.2)",
//                 padding: "15px",
//                 borderRadius: "16px",
//                 border: "2px solid #d97706",
//               }}
//             >
//               <button
//                 onMouseDown={handleDown}
//                 onMouseUp={handleUp}
//                 onTouchStart={handleDown}
//                 onTouchEnd={handleUp}
//                 disabled={!running && score > 0}
//                 style={{
//                   height: "60px",
//                   borderRadius: "16px",
//                   border: "none",
//                   fontSize: "18px",
//                   fontWeight: "700",
//                   background: holding ? "#059669" : "#dc2626",
//                   color: "white",
//                   transition: "all 0.12s ease",
//                   boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
//                   cursor: running || score === 0 ? "pointer" : "not-allowed",
//                   fontFamily: "'Baloo 2', cursive",
//                   opacity: !running && score > 0 ? 0.7 : 1,
//                 }}
//               >
//                 {holding
//                   ? "HOLDING (FINGER DOWN)"
//                   : running
//                     ? "PRESS & HOLD = FINGER DOWN"
//                     : score > 0
//                       ? "GAME OVER - CLICK RESTART"
//                       : "START GAME"}
//               </button>

//               <div
//                 style={{
//                   display: "flex",
//                   gap: "10px",
//                 }}
//               >
//                 {!running && score > 0 && (
//                   <button
//                     onClick={start}
//                     style={{
//                       height: "50px",
//                       borderRadius: "16px",
//                       border: "none",
//                       fontSize: "16px",
//                       fontWeight: "700",
//                       background: "#7c3aed",
//                       color: "white",
//                       transition: "all 0.12s ease",
//                       boxShadow: "0 6px 12px rgba(124, 58, 237, 0.3)",
//                       cursor: "pointer",
//                       fontFamily: "'Baloo 2', cursive",
//                       flex: 1,
//                     }}
//                   >
//                     PLAY AGAIN
//                   </button>
//                 )}

//                 {!running && score === 0 && (
//                   <button
//                     onClick={resetGame}
//                     style={{
//                       height: "50px",
//                       borderRadius: "16px",
//                       border: "none",
//                       fontSize: "16px",
//                       fontWeight: "700",
//                       background: "#4b5563",
//                       color: "white",
//                       transition: "all 0.12s ease",
//                       boxShadow: "0 6px 12px rgba(75, 85, 99, 0.3)",
//                       cursor: "pointer",
//                       fontFamily: "'Baloo 2', cursive",
//                       flex: 1,
//                     }}
//                   >
//                     RESET GAME
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Game Instructions */}
//             {showInstruction && (
//               <div
//                 style={{
//                   background: "rgba(251, 191, 36, 0.2)",
//                   padding: "15px",
//                   borderRadius: "16px",
//                   border: "2px dashed #d97706",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "15px",
//                   flex: 1,
//                   minHeight: 0,
//                   overflow: "hidden",
//                 }}
//               >
//                 <div
//                   style={{
//                     color: "#7c2d12",
//                     fontSize: "18px",
//                     fontWeight: "700",
//                     textAlign: "center",
//                     borderBottom: "2px solid #d97706",
//                     paddingBottom: "8px",
//                   }}
//                 >
//                   🎮 HOW TO PLAY
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "15px",
//                     flex: 1,
//                     minHeight: 0,
//                     overflow: "auto",
//                   }}
//                 >
//                   {/* Rules Side by Side */}
//                   <div
//                     style={{
//                       display: "flex",
//                       gap: "15px",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     {/* Flying Rule */}
//                     <div
//                       style={{
//                         flex: 1,
//                         minWidth: "120px",
//                         background: "rgba(220, 38, 38, 0.1)",
//                         borderRadius: "12px",
//                         padding: "12px",
//                         border: "2px solid #dc2626",
//                       }}
//                     >
//                       <div
//                         style={{
//                           color: "#dc2626",
//                           fontWeight: "bold",
//                           marginBottom: "8px",
//                           textAlign: "center",
//                         }}
//                       >
//                         FLYING OBJECTS:
//                       </div>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           gap: "8px",
//                           fontSize: "28px",
//                           marginBottom: "8px",
//                           flexWrap: "wrap",
//                         }}
//                       >
//                         {FLYING.slice(0, 3).map((item) => item.emoji)}
//                       </div>
//                       <div
//                         style={{
//                           color: "#dc2626",
//                           fontWeight: "bold",
//                           textAlign: "center",
//                           fontSize: "14px",
//                         }}
//                       >
//                         RELEASE BUTTON
//                       </div>
//                       <div
//                         style={{
//                           color: "#dc2626",
//                           textAlign: "center",
//                           fontSize: "12px",
//                           marginTop: "4px",
//                         }}
//                       >
//                         (LIFT FINGER)
//                       </div>
//                     </div>

//                     {/* Non-Flying Rule */}
//                     <div
//                       style={{
//                         flex: 1,
//                         minWidth: "120px",
//                         background: "rgba(5, 150, 105, 0.1)",
//                         borderRadius: "12px",
//                         padding: "12px",
//                         border: "2px solid #059669",
//                       }}
//                     >
//                       <div
//                         style={{
//                           color: "#059669",
//                           fontWeight: "bold",
//                           marginBottom: "8px",
//                           textAlign: "center",
//                         }}
//                       >
//                         NON-FLYING:
//                       </div>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           gap: "8px",
//                           fontSize: "28px",
//                           marginBottom: "8px",
//                           flexWrap: "wrap",
//                         }}
//                       >
//                         {NON_FLYING.slice(0, 3).map((item) => item.emoji)}
//                       </div>
//                       <div
//                         style={{
//                           color: "#059669",
//                           fontWeight: "bold",
//                           textAlign: "center",
//                           fontSize: "14px",
//                         }}
//                       >
//                         HOLD BUTTON
//                       </div>
//                       <div
//                         style={{
//                           color: "#059669",
//                           textAlign: "center",
//                           fontSize: "12px",
//                           marginTop: "4px",
//                         }}
//                       >
//                         (KEEP FINGER DOWN)
//                       </div>
//                     </div>
//                   </div>

//                   {/* Speed Indicator */}
//                   {running && (
//                     <div
//                       style={{
//                         textAlign: "center",
//                         color: "#7c2d12",
//                         fontSize: "14px",
//                         fontWeight: "600",
//                         background: "rgba(251, 191, 36, 0.3)",
//                         padding: "8px",
//                         borderRadius: "8px",
//                       }}
//                     >
//                       ⚡ Speed: {Math.round((SPEED / gameSpeed) * 100) / 100}x
//                     </div>
//                   )}

//                   {/* Key Info */}
//                   <div
//                     style={{
//                       textAlign: "center",
//                       color: "#dc2626",
//                       fontWeight: "bold",
//                       padding: "10px",
//                       background: "rgba(251, 191, 36, 0.3)",
//                       borderRadius: "8px",
//                       fontSize: "13px",
//                     }}
//                   >
//                     ⏱️ React quickly! Wrong answer ends the game!
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Decorative border */}
//         <div
//           style={{
//             position: "absolute",
//             top: "0",
//             left: "0",
//             right: "0",
//             height: "4px",
//             background:
//               "linear-gradient(90deg, #dc2626, #ea580c, #d97706, #f59e0b)",
//             borderRadius: "20px 20px 0 0",
//           }}
//         ></div>
//       </div>

//       {/* Responsive Styles */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .main-container {
//               flex-direction: column !important;
//               height: auto !important;
//               max-height: 100vh !important;
//               overflow-y: auto !important;
//             }

//             .game-area {
//               min-height: 50vh !important;
//             }

//             .instructions-area {
//               flex: 0 0 auto !important;
//               max-height: 40vh !important;
//             }

//             .object-display {
//               width: 140px !important;
//               height: 140px !important;
//             }

//             .object-display div {
//               font-size: 60px !important;
//             }

//             .hand {
//               width: 100px !important;
//               height: 120px !important;
//             }
//           }

//           @media (max-width: 480px) {
//             .main-container {
//               padding: 10px !important;
//             }

//             .object-display {
//               width: 120px !important;
//               height: 120px !important;
//             }

//             .object-display div {
//               font-size: 50px !important;
//             }

//             .hand {
//               width: 80px !important;
//               height: 100px !important;
//             }

//             .rules-container {
//               flex-direction: column !important;
//             }

//             .rule-box {
//               min-width: 100% !important;
//             }

//             .title {
//               font-size: 32px !important;
//             }
//           }

//           @media (max-height: 700px) {
//             .main-container {
//               max-height: 95vh !important;
//             }

//             .object-display {
//               width: 140px !important;
//               height: 140px !important;
//             }

//             .object-display div {
//               font-size: 60px !important;
//             }

//             .hand {
//               width: 100px !important;
//               height: 120px !important;
//             }
//           }

//           /* Hide scrollbar but keep functionality */
//           .scrollable-content::-webkit-scrollbar {
//             width: 4px;
//           }

//           .scrollable-content::-webkit-scrollbar-track {
//             background: rgba(251, 191, 36, 0.2);
//             border-radius: 10px;
//           }

//           .scrollable-content::-webkit-scrollbar-thumb {
//             background: #d97706;
//             border-radius: 10px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";

const FLYING = [
  { emoji: "🦅", canFly: true }, // Eagle
  { emoji: "✈️", canFly: true }, // Airplane
  { emoji: "🚁", canFly: true }, // Helicopter
  { emoji: "🦋", canFly: true }, // Butterfly
  { emoji: "🦆", canFly: true }, // Duck
  { emoji: "🦇", canFly: true }, // Bat
  { emoji: "🪰", canFly: true }, // Fly
  { emoji: "🦢", canFly: true }, // Swan
  { emoji: "🕊️", canFly: true }, // Dove
  { emoji: "🪂", canFly: true }, // Parachute
];

const NON_FLYING = [
  { emoji: "🐶", canFly: false }, // Dog
  { emoji: "🏠", canFly: false }, // House
  { emoji: "🚗", canFly: false }, // Car
  { emoji: "🌳", canFly: false }, // Tree
  { emoji: "🐱", canFly: false }, // Cat
  { emoji: "🪑", canFly: false }, // Chair
  { emoji: "🐘", canFly: false }, // Elephant
  { emoji: "📚", canFly: false }, // Books
  { emoji: "🛋️", canFly: false }, // Sofa
  { emoji: "🐢", canFly: false }, // Turtle
];

const SPEED = 1500; // time between images
const REACTION_TIME = 800; // time player has to react

export default function ChidiyaUdd() {
  const [obj, setObj] = useState(null);
  const [score, setScore] = useState(0);
  const [holding, setHolding] = useState(false);
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const loopRef = useRef(null);
  const reactionRef = useRef(null);
  const holdingRef = useRef(false);

  useEffect(() => {
    holdingRef.current = holding;
  }, [holding]);

  const randomObj = () => {
    const pool = Math.random() < 0.5 ? FLYING : NON_FLYING;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const stop = () => {
    clearInterval(loopRef.current);
    clearTimeout(reactionRef.current);
    setRunning(false);
    setObj(null);
  };

  const showNext = () => {
    const next = randomObj();
    setObj(next);

    clearTimeout(reactionRef.current);

    // wait before judging
    reactionRef.current = setTimeout(() => {
      const correct =
        (next.canFly && !holdingRef.current) ||
        (!next.canFly && holdingRef.current);

      if (correct) {
        setScore((s) => s + 1);
      } else {
        stop();
      }
    }, REACTION_TIME);
  };

  const start = () => {
    setScore(0);
    setRunning(true);
    setObj(null);

    let c = 3;
    setCountdown(c);

    const cd = setInterval(() => {
      c--;
      if (c === 0) {
        clearInterval(cd);
        setCountdown(null);
        showNext();
        loopRef.current = setInterval(showNext, SPEED);
      } else {
        setCountdown(c);
      }
    }, 1000);
  };

  const handleDown = () => {
    setHolding(true);
    if (!running) start();
  };

  const handleUp = () => {
    setHolding(false);
  };

  const resetGame = () => {
    clearInterval(loopRef.current);
    clearTimeout(reactionRef.current);
    setScore(0);
    setRunning(false);
    setObj(null);
    setHolding(false);
    setCountdown(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#111827",
          borderRadius: "24px",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <div
            style={{
              color: "#38bdf8",
              fontSize: "14px",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            CHIDIYA UDD
          </div>

          <div
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: "800",
              lineHeight: "1",
              marginBottom: "8px",
            }}
          >
            {score}
          </div>

          <div
            style={{
              color: running ? "#22c55e" : "#ef4444",
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            {running ? "ACTIVE" : score > 0 ? "GAME OVER" : "READY"}
          </div>

          {/* Reset Button */}
          <button
            onClick={resetGame}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              background: "#4b5563",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#6b7280")}
            onMouseLeave={(e) => (e.target.style.background = "#4b5563")}
          >
            RESET
          </button>
        </div>

        {/* Game Area */}
        <div
          style={{
            flex: "1",
            background: "#020617",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "min(120px, 20vw)",
            color: "white",
            border: "1px solid #1f2937",
            minHeight: "200px",
            maxHeight: "300px",
            aspectRatio: "1/1",
            margin: "0 auto",
            width: "100%",
            maxWidth: "300px",
          }}
        >
          {countdown ? countdown : obj ? obj.emoji : "🎯"}
        </div>

        {/* Rules Section - Side by Side with red and green borders */}

        {/* Game Instructions Note */}
        <div
          style={{
            color: "#9ca3af",
            fontSize: "11px",
            textAlign: "center",
            marginBottom: "8px",
            padding: "8px 12px",
            background: "rgba(30, 41, 59, 0.5)",
            borderRadius: "8px",
            border: "1px solid #374151",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
            HOW TO PLAY:
          </div>
          <div>
            Hold the button below to start the game 
            Game starts after the countdown is over 
            React quickly! Hold for non-flying, release for flying. Wrong answer
            ends the game.
          </div>
        </div>

        {/* Game Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Main Game Button */}
          <button
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onTouchStart={handleDown}
            onTouchEnd={handleUp}
            style={{
              height: "64px",
              borderRadius: "16px",
              border: "none",
              fontSize: "18px",
              fontWeight: "700",
              background: holding ? "#38bdf8" : "#1f2937",
              color: holding ? "#020617" : "#e5e7eb",
              transition: "0.12s",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {holding ? "HOLDING…" : "CHIDIYA UDD"}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>
        {`
          @media (max-width: 480px) {
            .game-container {
              padding: 16px !important;
              max-width: 100% !important;
            }
            
            .game-area {
              font-size: 80px !important;
              min-height: 180px !important;
              max-width: 250px !important;
            }
            
            .title {
              font-size: 12px !important;
            }
            
            .score {
              font-size: 36px !important;
            }
            
            .status {
              font-size: 10px !important;
            }
            
            .rules-section {
              flex-direction: column !important;
            }
            
            .rule-box {
              min-width: 100% !important;
              margin-bottom: 8px !important;
            }
            
            .main-button {
              height: 56px !important;
              font-size: 16px !important;
            }
            
            .reset-button {
              padding: 4px 8px !important;
              font-size: 10px !important;
            }
          }
          
          @media (max-height: 700px) {
            .game-area {
              font-size: 80px !important;
              min-height: 150px !important;
            }
            
            .game-container {
              gap: 12px !important;
              padding: 16px !important;
            }
          }
          
          @media (max-width: 360px) {
            .game-area {
              font-size: 70px !important;
              min-height: 140px !important;
            }
            
            .rule-emoji {
              font-size: 18px !important;
            }
            
            .main-button {
              height: 52px !important;
              font-size: 14px !important;
            }
          }
          
          /* Prevent text selection */
          * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Better tap targets for mobile */
          button {
            -webkit-tap-highlight-color: transparent;
          }
        `}
      </style>
    </div>
  );
}
