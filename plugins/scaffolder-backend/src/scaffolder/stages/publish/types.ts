/*
 * Copyright 2020 Spotify AB
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
import { TemplateEntityV1alpha1 } from '@backstage/catalog-model';
import { RequiredTemplateValues } from '../templater';
import { JsonValue } from '@backstage/config';

/**
 * Publisher is in charge of taking a folder created by
 * the templater, and pushing it to a remote storage
 */
export type PublisherBase = {
  /**
   *
   * @param opts object containing the template entity from the service
   *             catalog, plus the values from the form and the directory that has
   *             been templated
   */
  publish(opts: {
    entity: TemplateEntityV1alpha1;
    values: RequiredTemplateValues & Record<string, JsonValue>;
    directory: string;
  }): Promise<{ remoteUrl: string }>;
};
