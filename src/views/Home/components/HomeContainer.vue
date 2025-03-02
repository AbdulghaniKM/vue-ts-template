<template>
  <div class="max-w-3xl mx-auto p-4 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-semibold">Vue TypeScript Template</h1>
            <p class="text-sm text-gray-500 mt-1">Modern Development Stack</p>
          </div>
          <UBadge color="primary" variant="soft">v1.0.0</UBadge>
        </div>
      </template>

      <div class="py-4">
        <!-- Tech Stack Grid -->
        <div class="grid grid-cols-2 gap-6">
          <!-- Frontend -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-primary-500">
              <div class="text-xl">
                <Icon icon="logos:vue" />
              </div>
              <h2 class="font-medium">Frontend</h2>
            </div>
            <ul class="text-sm space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="logos:vue" />
                </div>
                Vue 3 + Composition API
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="logos:typescript-icon" />
                </div>
                TypeScript
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="logos:pinia" />
                </div>
                Pinia Store
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="logos:tailwindcss-icon" />
                </div>
                TailwindCSS
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="logos:nuxt-icon" />
                </div>
                Nuxt UI Components
              </li>
            </ul>
          </div>

          <!-- Development -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-primary-500">
              <div class="text-xl">
                <Icon icon="heroicons:wrench-screwdriver" />
              </div>
              <h2 class="font-medium">Development</h2>
            </div>
            <ul class="text-sm space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="skill-icons:vite-dark" />
                </div>
                Vite
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="vscode-icons:file-type-prettier" />
                </div>
                Prettier
              </li>
            </ul>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 gap-6 mt-6 pt-6 border-t">
          <!-- Auto Imports -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-primary-500">
              <div class="text-xl">
                <Icon icon="heroicons:bolt" />
              </div>
              <h2 class="font-medium">Auto Imports</h2>
            </div>
            <ul class="text-sm space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Vue Components
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Vue Router
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Type Declarations
              </li>
            </ul>
          </div>

          <!-- Utilities -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-primary-500">
              <div class="text-xl">
                <Icon icon="heroicons:cube" />
              </div>
              <h2 class="font-medium">Utilities</h2>
            </div>
            <ul class="text-sm space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Layout System
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Dark Mode
              </li>
              <li class="flex items-center gap-2">
                <div class="text-lg">
                  <Icon icon="heroicons:check-circle" />
                </div>
                Iconify Collections
              </li>
            </ul>
          </div>
        </div>

        <!-- Quick Start -->
        <div class="mt-6 pt-6 border-t">
          <div class="space-y-2">
            <h3 class="text-sm font-medium">Quick Start</h3>
            <div
              class="bg-gray-50 dark:bg-gray-800 rounded p-3 font-mono text-sm"
            >
              <div class="text-gray-500"># Clone and install</div>
              <div>
                git clone https://github.com/AbdulghaniKM/vue-ts-template
              </div>
              <div>cd vue-ts-template && npm install</div>
              <div class="text-gray-500 mt-2"># Development</div>
              <div>npm run dev</div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3">
          <CustomButton
            color="neutral"
            variant="soft"
            label="GitHub"
            icon="i-logos-github-icon"
            @click="navigateToGitHub"
          />
          <CustomButton
            color="primary"
            variant="soft"
            label="Documentation"
            icon="i-heroicons-book-open"
            @click="navigateToGitHub"
          />
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const navigateToGitHub = () => {
  window.open("https://github.com/AbdulghaniKM/vue-ts-template", "_blank");
};
</script>
