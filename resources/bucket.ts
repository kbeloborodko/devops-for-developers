import {ComponentResource, CustomResourceOptions, getStack} from "@pulumi/pulumi";
import {s3} from "@pulumi/aws";

export type FmBucketArgs = {
    bucketName: string;
    Product: string;
}

export class FmBucket extends ComponentResource {
    constructor(args: FmBucketArgs, opts?: CustomResourceOptions) {
        const resourceName = `${args.Product}`;

        super("pkg:index:FmBucket", resourceName, {}, opts);

        const stack = getStack();

        const bucketName = `${resourceName}-${stack}`;

        const bucket = new s3.Bucket(args.bucketName, {
            acl: "private",
            bucket: bucketName,
            tags: {
                Environment: stack,
            }
        }, {
            parent: this
        });

        new s3.BucketPublicAccessBlock(`${args.bucketName}-public-access-block-policy`, {
           bucket: bucket.id,
           blockPublicAcls: true,
           blockPublicPolicy: true,
           ignorePublicAcls: true,
           restrictPublicBuckets: true,
        }, {
            parent: this
        });
    }
}