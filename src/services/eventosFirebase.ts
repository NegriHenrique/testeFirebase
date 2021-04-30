import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
declare let gtag: Function;

enum EventosEnum {
  AdicionarInfoPagamento = "add_payment_info",
  AdicionarInfoEnvio = "add_shipping_info",
  AdicionarAoCarrinho = "add_to_cart",
  IniciarCheckout = "begin_checkout",
  Compra = "purchase",
  Reembolso = "refund",
  RemoverDoCarrinho = "remove_from_cart",
  SelecionarItem = "select_item",
  SelecionarPromocao = "select_promotion",
  VisualizarCarrinho = "view_cart",
  VisualizarItem = "view_item",
  VisualizarListaItens = "view_item_list",
  VisualizarPromocao = "view_promotion",
  Busca = "search",
  UsuarioLogin = "login",
  UsuarioCadastrar = "sign_up",
  VisualizarPagina = 'page_view',
}

interface IParamsItems {
  item_id: string;
  item_name: string;
  promotion_id: string;
  promotion_name: string;
  coupon?: string;
  discount?: number;
  creative_name?: string;
  creative_slot?: string;
  location_id?: string;
  affiliation?: string;
  item_brand?: string;
  item_category?: string;
  item_variant?: string;
  price?: number;
  currency?: string;
  quantity?: number;
}

interface IParams {
  coupon?: string;
  currency?: string;
  items?: IParamsItems[];
  payment_type?: string;
  value?: number;
  shipping_tier?: string;
  shipping?: number;
  tax?: number;
  page?: string;
}

export default class FirebaseEvents {
  // Enum de eventos acessível em qualquer instancia da classe
  eventos = EventosEnum;

  private firebaseAnalytics: FirebaseAnalytics = new FirebaseAnalytics()

  constructor() {}

  // gera um log event baseado em um evento do firebase
  async GerarLog(evento: EventosEnum, params: IParams) {
    try {
      await this.firebaseAnalytics.logEvent(evento, params);
      console.log('teste2')


    } catch (err) {
      console.log(err);
    }
  }

  teste() {
    gtag('event', 'signup_form_complete', {
        'event_callback': function() {
          console.log('teste');
        }
      });
  }
}
