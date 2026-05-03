import process from 'node:process';

const PROVIDERS = [
	'CI_OVERRIDE',
	'CI_SERVER',
	'GITHUB_ACTIONS',
	'GITLAB_CI',
	'TRAVIS',
	'CIRCLECI',
	'TF_BUILD', // Azure Pipelines
	'BUILDKITE',
	'DRONE',
	'APPVEYOR',
	'CODEBUILD_BUILD_ID', // AWS CodeBuild
	'BITBUCKET_COMMIT',
	'BITBUCKET_BUILD_NUMBER',
	'TEAMCITY_VERSION',
	'JENKINS_URL',
	'CONTINUOUS_INTEGRATION',
];

const TRUTHY = new Set(['1', 'true', 'TRUE', 'True', 'yes', 'on']);

export function isCI(environment: NodeJS.ProcessEnv = process.env): boolean {
	if(environment.CI && TRUTHY.has(environment.CI)) {
		return true;
	}

	for(const key of PROVIDERS) {
		const value = environment[key];

		if(value && value.length > 0) {
			return true;
		}
	}

	return false;
}
