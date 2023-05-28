import {FmBucketArgs} from "./resources/bucket";
import {FmFrontend} from "./services/frontend";

const timestamp = Date.now();
const frontendBucketsMetaDataList: FmBucketArgs[] = [
    {
        Name: `frontend-bucket-1-${timestamp}`,
        Product: `product-1-${timestamp}`
    }
];

for (const frontendBucketMetaData of frontendBucketsMetaDataList) {
    new FmFrontend(frontendBucketMetaData);
}

