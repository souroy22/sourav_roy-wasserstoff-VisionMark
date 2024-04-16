const whitelist = ["http://localhost:5173", "https://mentis-eye.netlify.app"];

// Configure CORS options
export const corsOptions = {
  origin: (origin: any, callback: any) => {
    // Check if the origin is in the whitelist or if it's a local request
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
