<template>
    <div>
     

        <section class="mt-10 px-10">
            <div class="flex flex-auto flex-wrap justify-between gap-10">
                <MoleculesBookCard v-for="(index, key) in 10" class="w-1/3 flex-grow" title="Something"
                    text="Some text here" imageSrc="https://picsum.photos/200/300"></MoleculesBookCard>
            </div>
        </section>
    </div>
</template>