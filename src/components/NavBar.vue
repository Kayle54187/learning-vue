<template>
  <div class="p-4 w-4/5 mx-auto flex items-center justify-between">
    <h1 class="font-bold text-xl">2DO</h1>
    <div class="space-x-6">
      <RouterLink to="/">All</RouterLink>
      <RouterLink to="/pending">Pending</RouterLink>
      <RouterLink to="/completed">Completed</RouterLink>
      <RouterLink to="/deleted">Deleted</RouterLink>
    </div>
    <button class="px-4 py-2 rounded-lg bg-slate-900 text-white">Create</button>
  </div>
</template>
