<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <p>I'm an example component.</p>
                        <button
                            class="btn btn-primary"
                            @click="broadcastEvent"
                        >Fire Event</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        listenForMessageSentEvent() {
            window.Echo.channel('message.send')
                .subscribed(() => {
                    console.log('SUBSCRIBED TO Message Send EVENT');
                })
                .listen('SendMessageEvent', (response) => {
                    alert(response.message || "FAILED");
                    console.log("EVENT RESPONSE", response)
                })
        },
        async broadcastEvent() {
            const response = await axios.get('/api/send');
            console.log("RESPONSE", response)
            alert(response.data.message || 'FAILED')
        }
    },
    mounted() {
        console.log('Component mounted.')
        this.listenForMessageSentEvent();
    }
}
</script>
