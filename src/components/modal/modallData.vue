<template>
    <modal  name="modalformData" height="auto" width="80%" :scrollable="true">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="title" id="largeModalLabel">{{judul}} </h4>
            </div>
            <form  method="post">
                <div class="modal-body">
                    <div v-for="(item, index) in fields" :key="index" class="form-group">
                        <label 
                        :for="item.name"
                        :key="`label-${item.name}`"
                        >{{item.label}} :</label>
                        
                        <input v-if="item.type !== 'textarea'" 
                        :type="item.type" :name="item.name" 
                        :placeholder="item.label" 
                        v-model="formData[item.name]" :max="item.max" :min="item.min"
                        :key="`field-${item.label}`" class="form-control" required autocomplete="off" />

                        <textarea v-if="item.type === 'textarea'" 
                        :name="item.name" 
                        :placeholder="item.label" 
                        :id="item.name" 
                        v-model="formData[item.name]"
                        :key="`field-textarea-${item.label}`" class="form-control" required autocomplete="off">
                        </textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger waves-effect" @click="hide()">Tutup</button>
                    <button type="button" class="btn btn-primary waves-effect" @click="simpan()" >Simpan</button>
                </div>
            </form>
        </div>
    </modal>
</template>
<script>
export default {
    props:['fields', 'judul', 'show'],
    data(){
        return{
            formData: {},
        }
    },
    methods:{
        hide(){
            this.$modal.hide('modalformData');
        },
        simpan(){
            this.$swal({
                title: 'Apakah Anda Yakin?',
                icon: 'question',
                text: 'Data data Akan disimpan.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya',
                cancelButtonText: 'Tidak',
                showCloseButton: true,
                showLoaderOnConfirm: true,
            }).then((result) => {
                if(!result.isConfirmed){
                    this.$swal('Gagal', 'Data belum disimpan di table', 'error');
                }
                else{
                    this.$swal('Sukses', 'Data telah tersimpan sementara pada table', 'success');
                    this.$emit('tambahanData',this.formData);
                    this.formData ={};
                    this.hide()
                }
            })
        }
    }
}
</script>
<style  scoped>
</style>