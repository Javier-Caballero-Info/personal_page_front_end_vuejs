module.exports = `
  <div class="menu mt-4 mb-4">

  <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Create Menu </h2>
    
    <hr/>

    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('text')"> {{menu.text}} </h1>
    </b-card>
    <b-card class="mb-2">

      <div class="">

        <b-card class="mb-2">

         <div class="">

        <b-form-group id="Menu_Text_Group"
                label="Text:"
                label-for="Text_Target">
          <b-form-input id="Text_Target"
                        name="text"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="menu.text"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('text'), 'is-valid': !errors.has('text')}"
                        placeholder="Text">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('text')" class="help">{{ errors.first('text') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Menu_Target_Group"
                label="Target:"
                label-for="Menu_Target">
          <b-form-input id="Menu_Target"
                        name="target"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="menu.target"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('target'), 'is-valid': !errors.has('target')}"
                        placeholder="Target">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('target')" class="help">{{ errors.first('target') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="menu_Order_Group"
                label="Order:"
                label-for="menu_Order">
          <b-form-input id="menu_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="menu.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
          </p>
        </b-form-group>

        <b-form-group id="menu_Lang_Group"
                label="Language:"
                label-for="menu_Lang">
          <b-form-input id="menu_Lang"
                        name="lang"
                        type="text"
                        v-model="menu.lang"
                        disabled
                        placeholder="Language">
          </b-form-input>
        </b-form-group>

      </div>  

    </b-card> 

    <hr/>

    <b-button v-on:click="$router.go(-1)"variant="outline-secondary">
        <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
    </b-button>

    <b-button type="submit" variant="primary" :disabled="errors.items.length > 0">
      <font-awesome-icon :icon="['fas', 'save']" /> Save
    </b-button>

  </b-form>

  </div>
`
