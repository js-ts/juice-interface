import { BigNumber } from '@ethersproject/bignumber'
import { V2ContractName } from 'models/v2/contracts'
import { V2FundingCycle, V2FundingCycleMetadata } from 'models/v2/fundingCycle'

import useV2ContractReader from './V2ContractReader'

export default function useProjectQueuedFundingCycle({
  projectId,
}: {
  projectId?: BigNumber
}) {
  return useV2ContractReader<[V2FundingCycle, V2FundingCycleMetadata]>({
    contract: V2ContractName.JBController,
    functionName: 'queuedFundingCycleOf',
    args: projectId ? [projectId.toHexString()] : null,
  })
}
