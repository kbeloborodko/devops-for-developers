import {ComponentResource, CustomResourceOptions, getStack} from "@pulumi/pulumi";
import {FmBucket} from "../resources/bucket";

type FmFrontendArgs = {
    Name: string,
    Product: string;
}

export class FmFrontend extends ComponentResource {
    constructor(args: FmFrontendArgs, opts?: CustomResourceOptions) {
        const resourceName = `${args.Product}`;

        super("pkg:index:FmFrontend", resourceName, {}, opts);

        const source = new FmBucket({
            Name: args.Name,
            Product: args.Product,
        }, {
            parent: this
        });
    }
}