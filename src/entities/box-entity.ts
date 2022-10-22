import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { AssetEntity } from "./asset-entity";
import { InputEntity } from "./input-entity";
import { TransactionEntity } from "./transaction-entity";
import { BoxEntityBase } from "./base-types/box-entity-base";
import { BoxRegisterEntity } from "./box-register-entity";

/* 
  Schema 
    TABLE node_outputs
    box_id                  VARCHAR(64) NOT NULL,
    tx_id                   VARCHAR(64) NOT NULL,
    header_id               VARCHAR(64) NOT NULL,
    value                   BIGINT      NOT NULL,
    creation_height         INTEGER     NOT NULL,
    settlement_height       INTEGER     NOT NULL,
    index                   INTEGER     NOT NULL,
    global_index            BIGINT      NOT NULL,
    ergo_tree               VARCHAR     NOT NULL,
    ergo_tree_template_hash VARCHAR(64) NOT NULL,
    address                 VARCHAR     NOT NULL,
    additional_registers    JSON        NOT NULL,
    timestamp               BIGINT      NOT NULL,
    main_chain              BOOLEAN     NOT NULL,
    PRIMARY KEY (box_id, header_id)
*/

@Entity({ name: "node_outputs" })
export class BoxEntity extends BoxEntityBase {
  @Column({ name: "header_id" })
  headerId!: string;

  @Column({ name: "settlement_height" })
  settlementHeight!: number;

  @Column({ name: "global_index", type: "bigint" })
  globalIndex!: bigint;

  @Column({ name: "timestamp", type: "bigint" })
  timestamp!: bigint;

  @Column({ name: "main_chain", type: "boolean" })
  mainChain!: boolean;

  @OneToOne(() => InputEntity, { nullable: true })
  @JoinColumn({ name: "box_id" })
  spentBy?: InputEntity;

  @OneToMany(() => AssetEntity, (asset) => asset.box)
  assets!: AssetEntity[];

  @OneToMany(() => BoxRegisterEntity, (register) => register.box)
  registers!: BoxRegisterEntity[];

  @ManyToOne(() => TransactionEntity, (tx) => tx.inputs)
  @JoinColumn({ name: "tx_id" })
  transaction!: TransactionEntity;
}
