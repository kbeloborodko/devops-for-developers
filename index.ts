import {FmBucket} from "./resources/bucket";

new FmBucket({
    Name: `${Date.now()}-example`,
    Product: "devops-course"
});