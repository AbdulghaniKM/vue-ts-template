<template>
  <div class="max-w-3xl mx-auto p-4 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-semibold">About the Project</h1>
            <p class="text-sm text-gray-500 mt-1">
              Project information and contribution
            </p>
          </div>
          <UBadge color="primary" variant="soft">v1.0.0</UBadge>
        </div>
      </template>

      <div class="py-4 space-y-6">
        <!-- Project Info -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="font-medium flex items-center gap-2">
              <div
                class="i-heroicons-information-circle text-primary-500"
              ></div>
              Project Overview
            </h2>
            <p class="text-sm text-gray-600">
              This template is built and maintained by the community to provide
              a modern, type-safe starting point for Vue.js projects. It
              combines the best tools and practices in the Vue ecosystem.
            </p>
          </div>

          <!-- Project Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-2xl font-semibold text-primary-500">1.0.0</div>
              <div class="text-xs text-gray-500">Version</div>
            </div>
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-2xl font-semibold text-primary-500">MIT</div>
              <div class="text-xs text-gray-500">License</div>
            </div>
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-2xl font-semibold text-primary-500">Vue 3</div>
              <div class="text-xs text-gray-500">Framework</div>
            </div>
            <div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-2xl font-semibold text-primary-500">100%</div>
              <div class="text-xs text-gray-500">TypeScript</div>
            </div>
          </div>
        </div>

        <!-- Contributing -->
        <div class="space-y-2">
          <h2 class="font-medium flex items-center gap-2">
            <div class="i-heroicons-users text-primary-500"></div>
            Contributing
          </h2>
          <div class="text-sm text-gray-600 space-y-2">
            <p>
              We welcome contributions of all kinds! Here's how you can help:
            </p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>Report bugs and issues</li>
              <li>Suggest new features</li>
              <li>Submit pull requests</li>
              <li>Improve documentation</li>
            </ul>
          </div>
        </div>

        <!-- Support -->
        <div class="space-y-2">
          <h2 class="font-medium flex items-center gap-2">
            <div class="i-heroicons-heart text-primary-500"></div>
            Support
          </h2>
          <p class="text-sm text-gray-600">
            If you find this template helpful, please consider giving it a star
            on GitHub. Your support helps us maintain and improve the project!
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between">
          <CustomButton
            color="neutral"
            variant="soft"
            label="View Issues"
            icon="i-heroicons-bug-ant"
            @click="navigateToIssues"
          />
          <CustomButton
            color="primary"
            variant="soft"
            label="Contribute"
            icon="i-heroicons-code-bracket"
            @click="navigateToContribute"
          />
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const navigateToIssues = () => {
  window.open(
    "https://github.com/AbdulghaniKM/vue-ts-template/issues",
    "_blank"
  );
};

const navigateToContribute = () => {
  window.open(
    "https://github.com/AbdulghaniKM/vue-ts-template/blob/main/CONTRIBUTING.md",
    "_blank"
  );
};
</script>
