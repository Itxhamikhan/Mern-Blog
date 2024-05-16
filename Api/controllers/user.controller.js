// create a test Api route    
  // req is a  data that we send to the Api, and res is a data that we recive from the Api.
     // these two information (req, res) that we have interaction with backend.
export const test = (req, res) => {
    res.json({message: "Api is working!" });
};


                                