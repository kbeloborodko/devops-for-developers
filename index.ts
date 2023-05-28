import {FmBucket, FmBucketArgs} from "./resources/bucket";

const timestamp = Date.now();
const bucketMetaDataList: FmBucketArgs[] = [
    {
        bucketName: `bucket-1-${timestamp}`,
        Product: `product-1-${timestamp}`
    }
];

for (const bucketMetaData of bucketMetaDataList) {
    new FmBucket(bucketMetaData);
}

