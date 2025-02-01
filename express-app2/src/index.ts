import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
});

app.post("/sum", (req, res) => {
    const parsedresponse = sumInput.parse(req.body);
    
    if(!parsedresponse)
    {
        res.status(400).send("Invalid input");
        return;
    }

    const answer = parsedresponse.a + parsedresponse.b;
    res.json({answer});

});

app.get("/sum", (req, res) => {
    const parsedresponse = sumInput.parse(req.body);
    
    if(!parsedresponse)
    {
        res.status(400).send("Invalid input");
        return;
    }

    const answer = parsedresponse.a + parsedresponse.b;
    res.json({answer});
});

