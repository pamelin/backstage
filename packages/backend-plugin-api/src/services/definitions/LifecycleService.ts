/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LoggerService } from './LoggerService';

/**
 * @public
 */
export type LifecycleServiceShutdownHook = {
  fn: () => void | Promise<void>;

  /**
   * Optional {@link LoggerService} that will be used for logging instead of the default logger.
   */
  logger?: LoggerService;
};

/**
 * @public
 */
export interface LifecycleService {
  /**
   * Register a function to be called when the backend is shutting down.
   */
  addShutdownHook(options: LifecycleServiceShutdownHook): void;
}
