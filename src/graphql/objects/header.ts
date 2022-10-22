import { Field, ObjectType } from "type-graphql";
import { AdProof } from "./ad-proof";
import { Extension } from "./extension";
import { Block } from "./block";
import { GraphQLJSONObject } from "graphql-type-json";

@ObjectType({ simpleResolvers: true })
export class Header {
  @Field()
  headerId!: string;

  @Field()
  parentId!: string;

  @Field()
  version!: number;

  @Field()
  height!: number;

  @Field()
  nBits!: bigint;

  @Field()
  difficulty!: bigint;

  @Field()
  timestamp!: bigint;

  @Field()
  stateRoot!: string;

  @Field()
  adProofsRoot!: string;

  @Field()
  transactionsRoot!: string;

  @Field()
  extensionHash!: string;

  @Field(() => GraphQLJSONObject)
  powSolutions() {
    return { pk: this.minerPk, w: this.w, n: this.n, d: this.d };
  }

  @Field(() => [Number], { name: "votes" })
  votesResolver() {
    return [
      Number.parseInt(this.votes.substring(0, 2), 16),
      Number.parseInt(this.votes.substring(2, 4), 16),
      Number.parseInt(this.votes.substring(4, 6), 16)
    ];
  }

  @Field()
  mainChain!: boolean;

  @Field(() => Extension)
  extension!: Extension[];

  @Field(() => AdProof)
  adProof!: AdProof[];

  @Field(() => Block)
  blockInfo!: Block[];

  minerPk!: string;
  w!: string;
  n!: string;
  d!: string;
  votes!: string;
}
