<script setup lang="ts">
import { ContactData } from '@/data/contactData'
</script>
<template>
  <div
    class="bg-secondary-light flex min-h-auto flex-col items-center p-8 md:p-14 lg:min-h-112.5 lg:p-20"
  >
    <p
      class="self-start text-xl font-medium tracking-wider text-white sm:text-2xl lg:text-3xl"
    >
      Contact
    </p>
    <div
      class="mt-10 flex flex-col gap-x-0 text-sm text-white md:flex-row md:gap-x-10 md:text-base lg:mt-15 lg:gap-x-15 lg:text-lg"
    >
      <div class="flex w-auto flex-col lg:w-120">
        <div class="flex p-2.5">
          <span class="min-w-25 font-light lg:min-w-32.5">
            {{ ContactData.email.title }}
          </span>
          <span>{{ ContactData.email.content[0] }}</span>
        </div>
        <div class="flex p-2.5">
          <span class="min-w-25 font-light lg:min-w-32.5">
            {{ ContactData.phone.title }}
          </span>
          <span>{{ ContactData.phone.content[0] }}</span>
        </div>
        <div class="flex p-2.5">
          <span class="min-w-25 font-light lg:min-w-32.5">
            {{ ContactData.git.title }}
          </span>
          <a
            :href="ContactData.git.content[0]"
            target="_blank"
            class="break-all hover:underline"
          >
            {{ ContactData.git.content[0] }}
          </a>
        </div>
      </div>
      <div class="flex p-2.5">
        <span class="min-w-25 font-light lg:min-w-32.5">
          {{ ContactData.resume.title }}
        </span>
        <div class="flex flex-col gap-y-2.5">
          <!-- <span class="cursor-pointer hover:underline">
            {{ ContactData.resume.content[0] }}
          </span> -->
          <a
            class="cursor-pointer hover:underline"
            href="/resume.pdf"
            download="고해찬_이력서.pdf"
          >
            {{ ContactData.resume.content[1] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
