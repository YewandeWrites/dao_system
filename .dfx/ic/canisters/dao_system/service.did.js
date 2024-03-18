export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  const Tokens = IDL.Record({ 'amount_e8s' : IDL.Nat });
  const SystemParams = IDL.Record({
    'transfer_fee' : Tokens,
    'proposal_vote_threshold' : Tokens,
    'proposal_submission_deposit' : Tokens,
  });
  const Account = IDL.Record({ 'owner' : IDL.Principal, 'tokens' : Tokens });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Principal, List)));
  const ProposalState = IDL.Variant({
    'open' : IDL.Null,
    'rejected' : IDL.Null,
    'executing' : IDL.Null,
    'accepted' : IDL.Null,
    'failed' : IDL.Text,
    'succeeded' : IDL.Null,
  });
  const ProposalPayload = IDL.Record({
    'method' : IDL.Text,
    'canister_id' : IDL.Principal,
    'message' : IDL.Vec(IDL.Nat8),
  });
  const Proposal = IDL.Record({
    'id' : IDL.Nat,
    'votes_no' : Tokens,
    'voters' : List,
    'state' : ProposalState,
    'timestamp' : IDL.Int,
    'proposer' : IDL.Principal,
    'votes_yes' : Tokens,
    'payload' : ProposalPayload,
  });
  const BasicDaoStableStorage = IDL.Record({
    'system_params' : SystemParams,
    'accounts' : IDL.Vec(Account),
    'proposals' : IDL.Vec(Proposal),
  });
  const Result__1 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const TransferArgs = IDL.Record({ 'to' : IDL.Principal, 'amount' : Tokens });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Vote = IDL.Variant({ 'no' : IDL.Null, 'yes' : IDL.Null });
  const VoteArgs = IDL.Record({ 'vote' : Vote, 'proposal_id' : IDL.Nat });
  const Result = IDL.Variant({ 'ok' : ProposalState, 'err' : IDL.Text });
  const DAO = IDL.Service({
    'get_proposal' : IDL.Func([IDL.Nat], [IDL.Opt(Proposal)], ['query']),
    'intitalize_voter_data' : IDL.Func([], [Result__1], ['query']),
    'list_proposals' : IDL.Func([], [IDL.Vec(Proposal)], ['query']),
    'list_voters' : IDL.Func([], [IDL.Vec(Account)], ['query']),
    'move_vote_power' : IDL.Func([TransferArgs], [Result_2], []),
    'submit_proposal' : IDL.Func([ProposalPayload], [Result_1], []),
    'vote' : IDL.Func([VoteArgs], [Result], []),
    'voter_token_balance' : IDL.Func([], [Tokens], ['query']),
  });
  return DAO;
};
export const init = ({ IDL }) => {
  const List = IDL.Rec();
  const Tokens = IDL.Record({ 'amount_e8s' : IDL.Nat });
  const SystemParams = IDL.Record({
    'transfer_fee' : Tokens,
    'proposal_vote_threshold' : Tokens,
    'proposal_submission_deposit' : Tokens,
  });
  const Account = IDL.Record({ 'owner' : IDL.Principal, 'tokens' : Tokens });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Principal, List)));
  const ProposalState = IDL.Variant({
    'open' : IDL.Null,
    'rejected' : IDL.Null,
    'executing' : IDL.Null,
    'accepted' : IDL.Null,
    'failed' : IDL.Text,
    'succeeded' : IDL.Null,
  });
  const ProposalPayload = IDL.Record({
    'method' : IDL.Text,
    'canister_id' : IDL.Principal,
    'message' : IDL.Vec(IDL.Nat8),
  });
  const Proposal = IDL.Record({
    'id' : IDL.Nat,
    'votes_no' : Tokens,
    'voters' : List,
    'state' : ProposalState,
    'timestamp' : IDL.Int,
    'proposer' : IDL.Principal,
    'votes_yes' : Tokens,
    'payload' : ProposalPayload,
  });
  const BasicDaoStableStorage = IDL.Record({
    'system_params' : SystemParams,
    'accounts' : IDL.Vec(Account),
    'proposals' : IDL.Vec(Proposal),
  });
  return [BasicDaoStableStorage];
};
