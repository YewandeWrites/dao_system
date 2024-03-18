import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account { 'owner' : Principal, 'tokens' : Tokens }
export interface BasicDaoStableStorage {
  'system_params' : SystemParams,
  'accounts' : Array<Account>,
  'proposals' : Array<Proposal>,
}
export interface DAO {
  'get_proposal' : ActorMethod<[bigint], [] | [Proposal]>,
  'intitalize_voter_data' : ActorMethod<[], Result__1>,
  'list_proposals' : ActorMethod<[], Array<Proposal>>,
  'list_voters' : ActorMethod<[], Array<Account>>,
  'move_vote_power' : ActorMethod<[TransferArgs], Result_2>,
  'submit_proposal' : ActorMethod<[ProposalPayload], Result_1>,
  'vote' : ActorMethod<[VoteArgs], Result>,
  'voter_token_balance' : ActorMethod<[], Tokens>,
}
export type List = [] | [[Principal, List]];
export interface Proposal {
  'id' : bigint,
  'votes_no' : Tokens,
  'voters' : List,
  'state' : ProposalState,
  'timestamp' : bigint,
  'proposer' : Principal,
  'votes_yes' : Tokens,
  'payload' : ProposalPayload,
}
export interface ProposalPayload {
  'method' : string,
  'canister_id' : Principal,
  'message' : Uint8Array | number[],
}
export type ProposalState = { 'open' : null } |
  { 'rejected' : null } |
  { 'executing' : null } |
  { 'accepted' : null } |
  { 'failed' : string } |
  { 'succeeded' : null };
export type Result = { 'ok' : ProposalState } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_2 = { 'ok' : null } |
  { 'err' : string };
export type Result__1 = { 'ok' : string } |
  { 'err' : string };
export interface SystemParams {
  'transfer_fee' : Tokens,
  'proposal_vote_threshold' : Tokens,
  'proposal_submission_deposit' : Tokens,
}
export interface Tokens { 'amount_e8s' : bigint }
export interface TransferArgs { 'to' : Principal, 'amount' : Tokens }
export type Vote = { 'no' : null } |
  { 'yes' : null };
export interface VoteArgs { 'vote' : Vote, 'proposal_id' : bigint }
export interface _SERVICE extends DAO {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
