/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { StartServicesAccessor } from '@kbn/core/public';
import { getKibanaContextFn } from '../../../common/search/expressions';
import { DataPublicPluginStart, DataStartDependencies } from '../../types';
import { SavedObjectsClientCommon } from '../../../common';

/**
 * This is some glue code that takes in `core.getStartServices`, extracts the dependencies
 * needed for this function, and wraps them behind a `getStartDependencies` function that
 * is then called at runtime.
 *
 * We do this so that we can be explicit about exactly which dependencies the function
 * requires, without cluttering up the top-level `plugin.ts` with this logic. It also
 * makes testing the expression function a bit easier since `getStartDependencies` is
 * the only thing you should need to mock.
 *
 * @param getStartServices - core's StartServicesAccessor for this plugin
 *
 * @internal
 */
export function getKibanaContext({
  getStartServices,
}: {
  getStartServices: StartServicesAccessor<DataStartDependencies, DataPublicPluginStart>;
}) {
  return getKibanaContextFn(async () => {
    const [core] = await getStartServices();
    return {
      savedObjectsClient: core.savedObjects.client as unknown as SavedObjectsClientCommon,
    };
  });
}
